import MemoryModule from "../../../util/memory/MemoryModule";
import Addresses from "../addresses";
import { isDeath } from "../utils/gameStateUtils";
import StreamerBotWebsocket from "../../../components/streamer.bot.socket/StreamerBotSocket";

export default class DeathEventModule extends MemoryModule {
    constructor() {
        super("deathEvent", "Send Generic Death Event", true, true);
        this.tooltip = "Sends an event to FUNtoon when Samus dies. This can be handled by scripts however you desire.";
        this.sbSocket = new StreamerBotWebsocket(this.settings.sbUrl.value);
    }

    settingDefs = {
        enableStreamerBot: {
            display: "Enable StreamerBotAction",
            type: "bool",
            default: false,
        },
        sbUrl: {
            display: "URL of streamerbot socket",
            type: "text",
            default: "ws://127.0.0.1:8123",
        },
        sbAction: {
            display: "Action ID of streamerbot",
            type: "text",
            default: "",
        },
    };

    shouldRunForGame(gameTags) {
        return gameTags.SM;
    }

    getMemoryReads() {
        return [Addresses.gameState];
    }

    memoryReadAvailable({ memory, sendEvent, globalState }) {
        if (!isDeath(memory.gameState.prevReadValue) && isDeath(memory.gameState.value)) {
            sendEvent("samusDeath", {
                gameTags: Object.keys(globalState.persistent.gameTags || {}),
                practice: !!globalState.persistent.gameTags.PRACTICE,
            });
            globalState.isDeath = true;
            if (this.settings.enableStreamerBot && this.settings.sbAction.value !== '') {
                this.sbSocket.doAction(this.settings.sbAction.value);
            }
        } else {
            globalState.isDeath = false;
        }
    }
}
