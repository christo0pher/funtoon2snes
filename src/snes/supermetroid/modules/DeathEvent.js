import MemoryModule from "../../../util/memory/MemoryModule";
import { GameStates } from "../enums";
import Addresses from "../addresses";
import { isDeath } from "../utils/gameStateUtils";
import StreamerBotWebsocket from "../../../components/streamer.bot.socket/StreamerBotSocket";

const deathStates = [GameStates.SAMUS_DEAD, GameStates.SAMUS_DEAD_BLACK_OUT, GameStates.SAMUS_DEAD_BLACK_OUT_2, GameStates.SAMUS_DEAD_BEGIN_DEATH_ANIMATION, GameStates.SAMUS_DEAD_FLASHING, GameStates.SAMUS_DEAD_EXPLOSION, GameStates.SAMUS_DEAD_FADE_TO_BLACK]

export default class DeathEventModule extends MemoryModule {
    constructor() {
        super("deathEvent", "Send Generic Death Event");
        this.tooltip = "Sends an event to FUNtoon when Samus dies. This can be handled by scripts however you desire.";
        this.sbSocket = new StreamerBotWebsocket(this.settings.sbUrl.value);
    }

    settingDefs = {
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
        return true;// gameTags.SM;
    }

    getMemoryReads() {
        return [Addresses.gameState];
    }

    memoryReadAvailable({ memory, sendEvent, globalState }) {
        if (!isDeath(memory.gameState.prevReadValue) && isDeath(memory.gameState.value)) {
            sendEvent("samusDeath");
            globalState.isDeath = true;
            if (this.settings.sbAction.value !== '') {
                this.sbSocket.doAction(this.settings.sbAction.value);
            }
        } else {
            globalState.isDeath = false;
        }
    }
}
