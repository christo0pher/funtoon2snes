import MemoryModule from "../../../util/memory/MemoryModule";
import { ItemFlags } from "../enums";
import Addresses from "../addresses";

export default class EquipmentTracker extends MemoryModule {
    constructor() {
        super("EquipmentTracker", "Keep track of Samus' Equipment");
        this.tooltip = "Sends custom funtext events when equipment changes.";
        this.reset();
    }


    setEnabled(enabled) {
        super.setEnabled(enabled);
        this.reset();
    }

    shouldRunForGame(gameTags) {
        return gameTags.SM;
    }

    getMemoryReads() {
        return [
            Addresses.collectedItems,
            Addresses.samusMaxHP,
            Addresses.samusMaxReserveHP,
            Addresses.samusMaxMissiles,
            Addresses.samusMaxSupers,
            Addresses.samusMaxPBs,
        ];
    }

    reset() {
        this.equipment = {};
    }

    memoryReadAvailable({ memory, sendEvent, globalState}) {
        // Handle a run being reset
        if (globalState.isReset) {
            this.reset();
            return;
        }

        // Handle a death
        if (globalState.isDeath) {
            this.reset();
            this.reloadUnsafe = false;
            return;
        }

        if (
            this.checkTransition(memory.collectedItems) ||
            this.checkTransition(memory.samusMaxHP) ||
            this.checkTransition(memory.samusMaxReserveHP) ||
            this.checkTransition(memory.samusMaxMissiles) ||
            this.checkTransition(memory.samusMaxSupers) ||
            this.checkTransition(memory.samusMaxPBs)
        ) {
            // we got some new item:
            console.log(memory.collectedItems);

            // try to translate to human language

            var collectedItems = [];
            memory.collectedItems.foreach((item) => {
                for (const [key, value] of Object.entries(ItemFlags.Equipment)) {
                    if (value === item) {
                        collectedItems.push(key);
                    }
                }
            });

            console.log("human readable collected items");
            console.log(collectedItems);

            sendEvent('equipmentChanged', {
                maxHP: memory.samusMaxHP,
                maxMissiles: memory.samusMaxMissiles,
                maxSupers: memory.samusMaxSupers,
                maxPBs: memory.samusMaxPBs,
                maxReserve: memory.samusMaxReserveHP,
                equipment: collectedItems,
            });
        }
    }
}

