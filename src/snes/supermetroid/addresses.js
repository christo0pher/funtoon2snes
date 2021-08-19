import { wram } from '../datatypes'
import MemState from '../../util/memory/MemState'

export default {
    roomID: new MemState(wram.uint16Read(0x079B), 'roomID', 'Room ID'),
    gameState: new MemState(wram.uint16Read(0x0998), 'gameState', 'Game State'),
    samusHP: new MemState(wram.uint16Read(0x09C2), 'samusHP', 'Samus HP'),
    samusMaxHP: new MemState(wram.uint16Read(0x09C4), 'samusHP', 'Samus Max HP'),
    enemyHP: new MemState(wram.uint16Read(0x0F8C), 'enemyHP', 'Enemy HP'),
    phantoonEyeTimer: new MemState(wram.uint16Read(0x0FE8), 'phantoonEyeTimer', 'Phantoon Eye Timer'),
    ceresTimer: new MemState(wram.bcdRead(0x0945, 2, true), 'ceresTimer', 'Ceres Timer'),
    ceresState: new MemState(wram.uint16Read(0x093F), 'ceresState', 'Ceres State'),
    eventStates: new MemState(wram.uint32Read(0xD820), 'eventStates', 'Event States'),
    bossStates: new MemState(wram.uint64Read(0xD828), 'bossStates', 'Boss States'),
    samusMissiles: new MemState(wram.uint16Read(0x09CE), 'samusMissiles', 'Samus Missiles'),
    samusMaxMissiles: new MemState(wram.uint16Read(0x09D0), 'samusMaxMissiles', 'Samus Max Missiles'),
    samusSupers: new MemState(wram.uint16Read(0x09CE), 'samusSupers', 'Samus Super Missiles'),
    samusMaxSupers: new MemState(wram.uint16Read(0x09D0), 'samusMaxSupers', 'Samus Max Super Missiles'),
    samusPBs: new MemState(wram.uint16Read(0x09CE), 'samusPBs', 'Samus Power Bombs'),
    samusMaxPBs: new MemState(wram.uint16Read(0x09D0), 'samusMaxPBs', 'Samus Max Power Bombs'),
    samusReserveHP: new MemState(wram.uint16Read(0x09CE), 'samusReserveHP', 'Samus Reserve HP'),
    samusMaxReserveHP: new MemState(wram.uint16Read(0x09D0), 'samusMaxReserveHP', 'Samus Max Reserve HP'),
    samusWaterPhysics: new MemState(wram.uint16Read(0x0AD2), 'samusWaterPhysics', 'Samus water physics state'),
    samusX: new MemState(wram.uint16Read(0x0AF6), 'samusX', 'Samus X Position'),
    samusY: new MemState(wram.uint16Read(0x0AFA), 'samusY', 'Samus y Position'),
    samusSubX: new MemState(wram.uint16Read(0x0AF8), 'samusSubX', 'Samus X Sub-pixel Position'),
    samusSubY: new MemState(wram.uint16Read(0x0AFC), 'samusSubY', 'Samus Y Sub-pixel Position'),
    samusXRadius: new MemState(wram.uint16Read(0x0AFE), 'samusXRadius', 'Samus X Radius'),
    samusYRadius: new MemState(wram.uint16Read(0x0B00), 'samusYRadius', 'Samus Y Radius'),
    samusXSpeed: new MemState(wram.int16Read(0x0B42), 'samusXSpeed', 'Samus X Sub-Speed'),
    samusXSubSpeed: new MemState(wram.uint16Read(0x0B44), 'samusXSubSpeed', 'Samus X Sub-Speed'),
    samusXSubMomentum: new MemState(wram.uint16Read(0x0B44), 'samusXSubMomentum', 'Samus X Sub-Momentum'),
    samusYSpeed: new MemState(wram.int16Read(0x0B2E), 'samusYSpeed', 'Samus Y Sub-Speed'),
    samusYSubSpeed: new MemState(wram.uint16Read(0x0B2C), 'samusYSubSpeed', 'Samus Y Sub-Speed'),
    samusYDirection: new MemState(wram.dataRead(0x0B36, 19), 'samusYDirection', 'Samus Y Direction'),
    samusPose: new MemState(wram.uint16Read(0x0A1C), 'samusPose', 'Samus Pose'),
    collectedItems: new MemState(wram.dataRead(0xD870, 19), 'collectedItems', '"Collected Items" Bit Array'),
}
