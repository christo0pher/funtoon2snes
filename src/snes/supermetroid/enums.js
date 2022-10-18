export const GameStates = {
    START:                              0x00,
    OPENING_CINEMATIC:                  0x01,
    GAME_OPTIONS_MENU:                  0x02,
    NOTHING:                            0x03,
    SAVE_GAME_MENU:                     0x04,
    LOADING_GAME_MAP_VIEW:              0x05,
    LOADING_GAME_DATA:                  0x06,
    INIT_GAME_AFTER_LOAD:               0x07,
    GAMEPLAY:                           0x08,
    HIT_DOOR_BLOCK:                     0x09,
    LOAD_NEXT_ROOM:                     0x0A,
    LOAD_NEXT_ROOM_2:                   0x0B,
    FADE_TO_PAUSE:                      0x0C,
    LOAD_PAUSE_SCREEN:                  0x0D,
    LOAD_PAUSE_SCREEN_2:                0x0E,
    PAUSED:                             0x0F,
    UNPAUSING:                          0x10,
    UNPAUSING_2:                        0x11,
    FADE_FROM_PAUSE:                    0x12,
    SAMUS_DEAD:                         0x13,
    SAMUS_DEAD_BLACK_OUT:               0x14,
    SAMUS_DEAD_BLACK_OUT_2:             0x15,
    SAMUS_DEAD_BEGIN_DEATH_ANIMATION:   0x16,
    SAMUS_DEAD_FLASHING:                0x17,
    SAMUS_DEAD_EXPLOSION:               0x18,
    SAMUS_DEAD_FADE_TO_BLACK:           0x19,
    GAME_OVER:                          0x1A,
    AUTO_RESERVE:                       0x1B,
    UNUSED:                             0x1C,
    DEBUG_MENU:                         0x1D,
    INTRO_CINEMATIC:                    0x1E,
    NEW_GAME_POST_INTRO:                0x1F,
    CERES_ELEVATOR:                     0x20,
    BLACK_OUT_FROM_CERES:               0x21,
    CERES_DESTROYED_CINEMATIC:          0x22,
    CERES_TIME_UP:                      0x23,
    TIME_UP_FADE_TO_WHITE:              0x24,
    CERES_DESTROYED_WITH_SAMUS:         0x25,
    BEAT_THE_GAME:                      0x26,
    END_CREDITS_CINEMATIC:              0x27,
    TRANSITION_TO_DEMO:                 0x28,
    TRANSITION_TO_DEMO_2:               0x29,
    PLAYING_DEMO:                       0x2A,
    TRANSITION_FROM_DEMO:               0x2B,
    TRANSITION_FROM_DEMO_2:             0x2C,
}

export const PhantoonPatterns = {
    FAST:   0x003C,
    MID:    0x0168,
    SLOW:   0x02D0,
}

export const CeresEscapeStateFlags = {
    NOT_IN_ESCAPE:          0x0000,
    RIDLEY_SWOOP_CUTSCENE:  0x0001,
    ESCAPE_TIMER_INITIATED: 0x0002,
    ELEVATOR_ROOM_ROTATING: 0x8000,
}

export const LiquidPhysicsType = {
    AIR:            0x00,
    WATER:          0x01,
    LAVA_OR_ACID:   0x02,
}

export const Rooms = {
    EMPTY:                                          0x0000,
    Crateria: {
        LANDING_SITE:                               0x91F8,
        GAUNTLET_ENTRANCE:                          0x92B3,
        PARLOR_AND_ALCATRAZ:                        0x92FD,
        CRATERIA_POWER_BOMB_ROOM:                   0x93AA,
        CRATERIA_SAVE_ROOM:                         0x93D5,
        WEST_OCEAN:                                 0x93FE,
        BOWLING_ALLEY_PATH:                         0x9461,
        CRATERIA_KIHUNTER_ROOM:                     0x948C,
        FORGOTTEN_HIGHWAY_ELEVATOR:                 0x94CC,
        EAST_OCEAN:                                 0x94FD,
        FORGOTTEN_HIGHWAY_KAGO_ROOM:                0x9552,
        CRAB_MAZE:                                  0x957D,
        FORGOTTEN_HIGHWAY_ELBOW:                    0x95A8,
        CRATERIA_TUBE:                              0x95D4,
        THE_MOAT:                                   0x95FF,
        RED_BRINSTAR_ELEVATOR_ROOM:                 0x962A,
        GAUNTLET_ENERGY_TANK:                       0x965B,
        WEST_OCEAN_BETWEEN_BOWLING:                 0x968F,
        CLIMB:                                      0x96BA,
        PIT_ROOM:                                   0x975C,
        ELEVATOR_TO_MORPH_BALL:                     0x97B5,
        BOMB_TORIZO_ROOM:                           0x9804,
        FLYWAY:                                     0x9879,
        PRE_MAP_FLYWAY:                             0x98E2,
        TERMINATOR_ROOM:                            0x990D,
        GREEN_BRINSTAR_ELEVATOR_ROOM:               0x9938,
        LOWER_MUSHROOMS:                            0x9969,
        CRATERIA_MAP_ROOM:                          0x9994,
        GREEN_PIRATES_SHAFT:                        0x99BD,
        CRATERIA_SUPER_ROOM:                        0x99F9,
        FINAL_MISSILE_BOMBWAY:                      0x9A44,
        THE_FINAL_MISSILE:                          0x9A90,
        STATUES_HALLWAY:                            0xA5ED,
        STATUES_ROOM:                               0xA66A,
    },
    GreenBrinstar: {
        GREEN_BRINSTAR_MAIN_SHAFT:                  0x9AD9,
        BRINSTAR_PRE_MAP_ROOM:                      0x9B9D,
        EARLY_SUPERS_ROOM:                          0x9BC8,
        BRINSTAR_RESERVE_TANK_ROOM:                 0x9C07,
        BRINSTAR_MAP_ROOM:                          0x9C35,
        GREEN_BRINSTAR_FIREFLEA_ROOM:               0x9C5E,
        GREEN_BRINSTAR_MISSILE_STATION:             0x9C89,
        SPORE_SPAWN_KIHUNTER_ROOM:                  0x9D9C,
        SPORE_SPAWN_ROOM:                           0x9DC7,
        GREEN_HILL_ZONE:                            0x9E52,
        NOOB_BRIDGE:                                0x9FBA,
        GREEN_BRINSTAR_BEETOM_ROOM:                 0x9FE5,
        ETECOON_ENERGY_TANK_ROOM:                   0xA011,
        ETECOON_SUPER_ROOM:                         0xA051,
        GREEN_BRINSTAR_SAVE_ROOM:                   0xA201,
        ETECOON_SAVE_ROOM:                          0xA22A,
    },
    PinkBrinstar: {
        SPORE_SPAWN_SUPER_ROOM:                     0x9B5B,
        DACHORA_ROOM:                               0x9CB3,
        BIG_PINK:                                   0x9D19,
        PINK_BRINSTAR_POWER_BOMB_ROOM:              0x9E11,
        DACHORA_ENERGY_CHARGE_STATION:              0xA07B,
        SPORE_SPAWN_FARMING_ROOM:                   0xA0A4,
        WATERWAY_ENERGY_TANK_ROOM:                  0xA0D2,
        PINK_BRINSTAR_HOPPER_ROOM:                  0xA130,
        HOPPER_ENERGY_TANK_ROOM:                    0xA15B,
        BIG_PINK_SAVE_ROOM:                         0xA184,
    },
    BlueBrinstar: {
        MORPH_BALL_ROOM:                            0x9E9F,
        CONSTRUCTION_ZONE:                          0x9F11,
        BLUE_BRINSTAR_ENERGY_TANK_ROOM:             0x9F64,
        FIRST_MISSILE_ROOM:                         0xA107,
        BLUE_BRINSTAR_BOULDER_ROOM:                 0xA1AD,
        BILLY_MAYS_ROOM:                            0xA1D8,
    },
    RedBrinstar: {
        RED_TOWER:                                  0xA253,
        RED_BRINSTAR_FIREFLEA_ROOM:                 0xA293,
        XRAY_SCOPE_ROOM:                            0xA2CE,
        HELLWAY:                                    0xA2F7,
        CATERPILLAR_ROOM:                           0xA322,
        BETA_POWER_BOMB_ROOM:                       0xA37C,
        ALPHA_POWER_BOMB_ROOM:                      0xA3AE,
        BAT_ROOM:                                   0xA3DD,
        BELOW_SPAZER:                               0xA408,
        SPAZER_ROOM:                                0xA447,
        SLOATERS_REFILL:                            0xA618,
        RED_BRINSTAR_SAVE_ROOM:                     0xA734,

    },
    Warehouse: {
        WAREHOUSE_ZEELA_ROOM:                       0xA471,
        WAREHOUSE_ENERGY_TANK_ROOM:                 0xA4B1,
        WAREHOUSE_KIHUNTER_ROOM:                    0xA4DA,
        BABY_KRAID_ROOM:                            0xA521,
        KRAID_EYE_DOOR_ROOM:                        0xA56B,
        KRAID_ROOM:                                 0xA59F,
        KRAID_RECHARGE_STATIONS:                    0xA641,
        WAREHOUSE_ENTRANCE:                         0xA6A1,
        VARIA_SUIT_ROOM:                            0xA6E2,
        WAREHOUSE_SAVE_ROOM:                        0xA70B,
    },
    UpperNorfair: {
        ICE_BEAM_ACID_ROOM:                         0xA75D,
        CATHEDRAL:                                  0xA788,
        CATHEDRAL_ENTRANCE:                         0xA7B3,
        BUSINESS_CENTER:                            0xA7DE,
        ICE_BEAM_GATE_ROOM:                         0xA815,
        ICE_BEAM_TUTORIAL_ROOM:                     0xA865,
        ICE_BEAM_ROOM:                              0xA890,
        ICE_BEAM_SNAKE_ROOM:                        0xA8B9,
        CRUMBLE_SHAFT:                              0xA8F8,
        CROCOMIRE_SPEEDWAY:                         0xA923,
        CROCOMIRE_ROOM:                             0xA98D,
        HI_JUMP_BOOTS_ROOM:                         0xA9E5,
        CROCOMIRE_ESCAPE:                           0xAA0E,
        HI_JUMP_ENERGY_TANK_ROOM:                   0xAA41,
        POST_CROCOMIRE_FARMING_ROOM:                0xAA82,
        POST_CROCOMIRE_SAVE_ROOM:                   0xAAB5,
        POST_CROCOMIRE_POWER_BOMB_ROOM:             0xAADE,
        POST_CROCOMIRE_SHAFT:                       0xAB07,
        POST_CROCOMIRE_MISSILE_ROOM:                0xAB3B,
        GRAPPLE_TUTORIAL_ROOM_3:                    0xAB64,
        POST_CROCOMIRE_JUMP_ROOM:                   0xAB8F,
        GRAPPLE_TUTORIAL_ROOM_2:                    0xABD2,
        GRAPPLE_TUTORIAL_ROOM_1:                    0xAC00,
        GRAPPLE_BEAM_ROOM:                          0xAC2B,
        NORFAIR_RESERVE_TANK_ROOM:                  0xAC5A,
        GREEN_BUBBLES_MISSILE_ROOM:                 0xAC83,
        BUBBLE_MOUNTAIN:                            0xACB3,
        SPEED_BOOSTER_HALL:                         0xACF0,
        SPEED_BOOSTER_ROOM:                         0xAD1B,
        SINGLE_CHAMBER:                             0xAD5E,
        DOUBLE_CHAMBER:                             0xADAD,
        WAVE_BEAM_ROOM:                             0xADDE,
        SPIKY_PLATFORMS_TUNNEL:                     0xAE07,
        VOLCANO_ROOM:                               0xAE32,
        KRONIC_BOOST_ROOM:                          0xAE74,
        MAGDOLLITE_TUNNEL:                          0xAEB4,
        PURPLE_SHAFT:                               0xAEDF,
        LAVA_DIVE_ROOM:                             0xAF14,
        LOWER_NORFAIR_ELEVATOR:                     0xAF3F,
        UPPER_NORFAIR_FARMING_ROOM:                 0xAF72,
        RISING_TIDE:                                0xAFA3,
        ACID_SNAKES_TUNNEL:                         0xAFCE,
        SPIKY_ACID_SNAKES_TUNNEL:                   0xAFFB,
        NUTELLA_REFILL:                             0xB026,
        PURPLE_FARMING_ROOM:                        0xB051,
        BAT_CAVE:                                   0xB07A,
        NORFAIR_MAP_ROOM:                           0xB0B4,
        BUBBLE_MOUNTAIN_SAVE_ROOM:                  0xB0DD,
        FROG_SPEEDWAY:                              0xB106,
        RED_PIRATE_SHAFT:                           0xB139,
        FROG_SAVESTATION:                           0xB167,
        CROCOMIRE_SAVE_ROOM:                        0xB192,
        LOWER_NORFAIR_ELEVATOR_SAVE_ROOM:           0xB1BB,
    },
    LowerNorfair: {
        ACID_STATUE_ROOM:                           0xB1E5,
        MAIN_HALL:                                  0xB236,
        GOLDEN_TORIZO_ROOM:                         0xB283,
        FAST_RIPPER_ROOM:                           0xB2DA,
        GOLDENT_TORIZO_ENERGY_RECHARGE:             0xB305,
        RIDLEY_ROOM:                                0xB32E,
        LOWER_NORFAIR_FARMING_ROOM:                 0xB37A,
        FAST_PILLARS_SETUP_ROOM:                    0xB3A5,
        MICKEY_MOUSE_ROOM:                          0xB40A,
        PILLAR_ROOM:                                0xB457,
        PLOWERHOUSE_ROOM:                           0xB482,
        WORST_ROOM_IN_THE_GAME:                     0xB4AD,
        AMPHITHEATRE:                               0xB4E5,
        LOWER_NORFAIR_SPRING_BALL_MAZE_ROOM:        0xB510,
        LOWER_NORFAIR_ESCAPE_POWER_BOMB_ROOM:       0xB55A,
        RED_KIHUNTER_SHAFT:                         0xB585,
        WASTELAND:                                  0xB5D5,
        METAL_PIRATES_ROOM:                         0xB62B,
        THREE_MUSKETEERS_ROOM:                      0xB656,
        RIDLEY_TANK_ROOM:                           0xB698,
        SCREW_ATTACK_ROOM:                          0xB6C1,
        LOWER_NORFAIR_FIREFLEA_ROOM:                0xB6EE,
        RED_KIHUNTER_SHAFT_SAVE_ROOM:               0xB741,
    },
    WreckedShip: {
        BOWLING_ALLEY:                              0xC98E,
        WRECKED_SHIP_ENTRANCE:                      0xCA08,
        ATTIC:                                      0xCA52,
        ASSEMBLY_LINE:                              0xCAAE,
        WRECKED_SHIP_MAIN_SHAFT:                    0xCAF6,
        SPIKY_DEATH_ROOM:                           0xCB8B,
        ELECTRIC_DEATH_ROOM:                        0xCBD5,
        WRECKED_SHIP_ENERGY_TANK_ROOM:              0xCC27,
        BASEMENT:                                   0xCC6F,
        WRECKED_SHIP_MAP_ROOM:                      0xCCCB,
        PHANTOON_ROOM:                              0xCD13,
        SPONGE_BATH:                                0xCD5C,
        WRECKED_SHIP_WEST_SUPER_ROOM:               0xCDA8,
        WERCKED_SHIP_EAST_SUPER_ROOM:               0xCDF1,
        GRAVITY_SUIT_ROOM:                          0xCE40,
        WRECKED_SHIP_SAVE_ROOM:                     0xCE8A,
    },
    Maridia: {
        GLASS_TUNNEL_SAVE_ROOM:                     0xCED2,
        GLASS_TUNNEL:                               0xCEFB,
        WEST_TUNNEL:                                0xCF54,
        EAST_TUNNEL:                                0xCF80,
        MAIN_STREET:                                0xCFC9,
        FISH_TANK:                                  0xD017,
        MAMA_TURTLE_ROOM:                           0xD055,
        CRAB_TUNNEL:                                0xD08A,
        MT_EVEREST:                                 0xD0B9,
        RED_FISH_ROOM:                              0xD104,
        WATERING_HOLE:                              0xD13B,
        NORTHWEST_MARIDIA_BUG_ROOM:                 0xD16D,
        CRAB_SHAFT:                                 0xD1A3,
        PSEUDO_PLASMA_SPARK_ROOM:                   0xD1DD,
        CRAB_HOLE:                                  0xD21C,
        WEST_SAND_HALL_TUNNEL:                      0xD252,
        PLASMA_TUTORIAL_ROOM:                       0xD27E,
        PLASMA_ROOM:                                0xD2AA,
        THREAD_THE_NEEDLE_ROOM:                     0xD2D9,
        MARIDIA_ELEVATOR_ROOM:                      0xD30B,
        PLASMA_SPARK_ROOM:                          0xD340,
        PLASMA_CLIMB:                               0xD387,
        MARIDIA_MAP_ROOM:                           0xD3B6,
        FORGOTTEN_HIGHWAY_SAVE_ROOM:                0xD3DF,
        TOILET_BOWL:                                0xD408,
        BUG_SAND_HOLE:                              0xD433,
        WEST_SAND_HALL:                             0xD461,
        OASIS:                                      0xD48E,
        EAST_SAND_HALL:                             0xD4C2,
        WEST_SAND_HOLE:                             0xD4EF,
        EAST_SAND_HOLE:                             0xD51E,
        WEST_AQUEDUCT_QUICKSAND_ROOM:               0xD54D,
        EAST_AQUEDUCT_QUICKSAND_ROOM:               0xD57A,
        AQUEDUCT:                                   0xD5A7,
        BUTTERFLY_ROOM:                             0xD5EC,
        BOTWOON_HALLWAY:                            0xD617,
        PANTS_ROOM:                                 0xD646,
        EAST_PANTS_ROOM:                            0xD69A,
        SPRING_BALL_ROOM:                           0xD6D0,
        BELOW_BOTWOON_ENERGY_TANK:                  0xD6FD,
        COLOSSEUM:                                  0xD72A,
        AQUEDUCT_SAVE_ROOM:                         0xD765,
        PRE_DRAYGON_ROOM:                           0xD78F,
        BOTWOON_ENERGY_TANK_ROOM:                   0xD7E4,
        DRAYGON_SAVE_ROOM:                          0xD81A,
        MARIDIA_MISSILE_REFILL_ROOM:                0xD845,
        PLASMA_BEACH_QUICKSAND_ROOM:                0xD86E,
        BOTWOON_QUICKSAND_ROOM:                     0xD898,
        SHAKTOOL_ROOM:                              0xD8C5,
        HALFIE_CLIMB_ROOM:                          0xD913,
        BOTWOON_ROOM:                               0xD95E,
        SPACE_JUMP_ROOM:                            0xD9AA,
        MARIDIA_HEALTH_REFILL_ROOM:                 0xD9D4,
        WEST_CACTUS_ALLEY_ROOM:                     0xD9FE,
        EAST_CACTUS_ALLEY_ROOM:                     0xDA2B,
        DRAYGON_ROOM:                               0xDA60,
    },
    Tourian: {
        TOURIAN_FIRST_ROOM:                         0xDAAE,
        FLATROIDS:                                  0xDAE1,
        WALKIE_TALKIE:                              0xDB31,
        LASER_GUN:                                  0xDB7D,
        JUDGMENT:                                   0xDBCD,
        BLUE_HOPPER_ROOM:                           0xDC19,
        DUST_TORIZO_ROOM:                           0xDC65,
        BIG_BOY_ROOM:                               0xDCB1,
        SEAWEED_ROOM:                               0xDCFF,
        TOURIAN_RECHARGE_ROOM:                      0xDD2E,
        MOTHER_BRAIN_ROOM:                          0xDD58,
        TOURIAN_EYE_DOOR_ROOM:                      0xDDC4,
        RINKA_SHAFT:                                0xDDF3,
        LOWER_TOURIAN_SAVE_ROOM:                    0xDE23,
        DOOR_STUCK:                                 0xDE4D,
        PLINKO_ROOM:                                0xDE7A,
        TOURIAN_RUNWAY:                             0xDEA7,
        LEODOX_ROOM:                                0xDEDE,
        UPPER_TOURIAN_SAVE_ROOM:                    0xDF1B,
    },
    Ceres: {
        CERES_ELEVATOR_ROOM:                        0xDF45,
        FALLING_TILE_ROOM:                          0xDF8D,
        MAGNET_STAIRS_ROOM:                         0xDFD7,
        DEAD_SCIENTIST_ROOM:                        0xE021,
        FIFTY_EIGHT_ESCAPE:                         0xE06B,
        CERES_RIDLEY_ROOM:                          0xE0B5,
    },
}

export const SamusMovementType = {
    STANDING:                               0x00,
    RUNNING:                                0x01,
    NORMAL_JUMPING:                         0x02,
    SPIN_JUMPING:                           0x03,
    MORPH_BALL_ON_GROUND:                   0x04,
    CROUCHING:                              0x05,
    FALLING:                                0x06,
    MORPH_BALL_IN_AIR:                      0x08,
    KNOCKBACK:                              0x09,
    CRYSTAL_FLASH_ENDING:                   0x09,
    TURNING_ON_GROUND:                      0x0E,
    TRANSITION_BETWEEN_CROUCH_STAND_MORPH:  0x0F,
    MOONWALKING:                            0x10,
    SPRINGBALL_ON_GROUND:                   0x11,
    SPRINGBALL_IN_AIR:                      0x12,
    SPRINGBALL_FALLING:                     0x13,
    WALL_JUMPING:                           0x14,
    RAN_INTO_WALL:                          0x15,
    TURNING_JUMPING:                        0x17,
    TURNING_FALLING:                        0x18,
    DAMAGE_BOOSTING:                        0x19,
    GRABBED_BY_DRAGON:                      0x1A,
    SHINESPARK_CF_DRAINED:                  0x1B,
}

export const SamusPose = {
    FACING_FORWARD_POWER_SUIT:              0x00,
    FACING_RIGHT_NORMAL:                    0x01,
    FACING_LEFT_NORMAL:                     0x02,
    FACING_RIGHT_AIMING_UP:                 0x03,
    FACING_LEFT_AIMING_UP:                  0x04,
    FACING_RIGHT_AIMING_UP_RIGHT:           0x05,
    FACING_LEFT_AIMING_UP_LEFT:             0x06,
    FACING_RIGHT_AIMING_DOWN_RIGHT:         0x07,
    FACING_LEFT_AIMING_DOWN_LEFT:           0x08,
    MOVING_RIGHT_NOT_AIMING:                0x09,
    MOVING_LEFT_NOT_AIMING:                 0x0A,
    MOVING_RIGHT_GUN_EXTENDED:              0x0B,
    MOVING_LEFT_GUN_EXTENDED:               0x0C,
    MOVING_RIGHT_AIMING_UP_RIGHT:           0x0F,
    MOVING_LEFT_AIMING_UP_LEFT:             0x10,
    MOVING_RIGHT_AIMING_DOWN_RIGHT:         0x11,
    MOVING_LEFT_AIMING_DOWN_LEFT:           0x12,
    FACING_RIGHT_NORMAL_JUMP_NOT_AIMING_NOT_MOVING_GUN_EXTENDED:    0x13,
    FACING_LEFT_NORMAL_JUMP_NOT_AIMING_NOT_MOVING_GUN_EXTENDED:     0x14,
    FACING_RIGHT_NORMAL_JUMP_AIMING_UP:     0x15,
    FACING_LEFT_NORMAL_JUMP_AIMING_UP:      0x16,
    FACING_RIGHT_NORMAL_JUMP_AIMING_DOWN:   0x17,
    FACING_LEFT_NORMAL_JUMP_AIMING_DOWN:    0x18,
    FACING_RIGHT_SPIN_JUMP:                 0x19,
    FACING_LEFT_SPIN_JUMP:                  0x1A,
    FACING_RIGHT_SPACE_JUMP:                0x1B,
    FACING_LEFT_SPACE_JUMP:                 0x1C,
    FACING_RIGHT_MORPH_BALL_NO_SPRINGBALL_ON_GROUND:    0x1D,
    MOVING_RIGHT_MORPH_BALL_NO_SPRINGBALL_ON_GROUND:    0x1E,
    MOVING_LEFT_MORPH_BALL_NO_SPRINGBALL_ON_GROUND:     0x1F,
    FACING_RIGHT_TURNING_STANDING:          0x25,
    FACING_LEFT_TURNING_STANDING:           0x26,
    // TODO
    //...
    FACING_LEFT_NORMAL_JUMP_AIMING_UP_LEFT:     0x6A,
    //...
    FACING_LEFT_NORMAL_JUMP_AIMING_DOWN_LEFT:   0x6C,
}

export const EquipmentFlags = {
    VARIA_SUIT: 0x1,
    SPRING_BALL: 0x2,
    MORPH_BALL: 0x4,
    SCREW_ATTACK: 0x8,
    GRAVITY_SUIT: 0x20,
    HI_JUMP_BOOTS: 0x100,
    SPACE_JUMP: 0x200,
    BOMBS: 0x1000,
    SPEED_BOOSTER: 0x2000,
    GRAPPLE: 0x4000,
    XRAY: 0x8000,
}

export const CollectedBeamFlags = {
    WAVE:   0x0001,
    ICE:    0x0002,
    SPAZER: 0x0004,
    PLASMA: 0x0008,
    CHARGE: 0x1000,
}

export const ButtonBindingFlags = {
    B:      0x8000,
    Y:      0x4000,
    SELECT: 0x2000,
    START:  0x1000,
    UP:     0x0800,
    DOWN:   0x0400,
    LEFT:   0x0200,
    RIGHT:  0x0100,
    A:      0x0080,
    X:      0x0040,
    L:      0x0020,
    R:      0x0010,
}

export const ReserveModeStatus = {
    NOT_OBTAINED:   0x00,
    AUTO:           0x01,
    MANUAL:         0x02,
}

export const Areas = {
    CRATERIA:       0x00,
    BRINSTAR:       0x01,
    NORFAIR:        0x02,
    WRECKED_SHIP:   0x03,
    MARIDIA:        0x04,
    TOURIAN:        0x05,
    CERES:          0x06,
    DEBUG:          0x07,
}

export const EventStates = {
    ZEBES_IS_AWAKE:            0x00,
    METROID_ATE_SIDEHOPPER:    0x01,
    MB_GLASS_BROKEN:           0x02,
    ZEBETITE_1_BROKEN:         0x03,
    ZEBETITE_2_BROKEN:         0x04,
    ZEBETITE_3_BROKEN:         0x05,
    PHANTOON_STATUE_GREY:      0x06,
    RIDLEY_STATUE_GREY:        0x07,

    DRAYGON_STATUE_GREY:       0x08,
    KRAID_STATUE_GREY:         0x09,
    TOURIAN_ENTRANCE_UNLOCKED: 0x0A,
    MARIDIA_TUBE_BROKEN:       0x0B,
    LN_CHOZO_LOWERED_ACID:     0x0C,
    SHAKTOOL_CLEARED_PATH:     0x0D,
    ZEBES_TIMEBOMB_SET:        0x0E,
    ANIMALS_SAVED:             0x0F,
    
    METROID_ROOM_1_CLEARED:    0x10,
    METROID_ROOM_2_CLEARED:    0x11,
    METROID_ROOM_3_CLEARED:    0x12,
    METROID_ROOM_4_CLEARED:    0x13,
    OUTRAN_SPEED_LAVA_ROOM:    0x15,
}

export const BossStates = {
    BOMB_TORIZO:    0x02,
    SPORE_SPAWN:    0x09,
    KRAID:          0x08,
    PHANTOON:       0x18,
    BOTWOON:        0x21,
    DRAYGON:        0x20,
    CROCOMIRE:      0x11,
    GOLDEN_TORIZO:  0x12,
    RIDLEY:         0x10,
}

export const ItemFlags = {
    Misiles: {
        OCEAN_UNDERWATER_MISSILES:      0x01,
        OCEAN_SKY_MISSILES:             0x02,
        OCEAN_LAND_MISSILES:            0x03,
        MOAT_MISSILES:                  0x04,
        MOTHER_BRAIN_MISSILES:          0x06,
        GAUNTLET_RIGHT_MISSILES:        0x09,
        GAUNTLET_LEFT_MISSILES:         0x0A,
        FINAL_MISSILES:                 0x0C,
        BELOW_EARLY_SUPERS_MISSILES:    0x0F,
        BRINSTAR_RESERVE_MISSILES_2:    0x12,
        BRINSTAR_RESERVE_MISSILES_1:    0x13,
        BIG_PINK_TOP_MISSILES:          0x15,
        CHARGE_MISSILES:                0x16,
        GREEN_HILLS_MISSILES:           0x19,
        RETRO_BRINSTAR_MISSILES:        0x1C,
        AWAKENING_MISSILES:             0x22,
        BILLY_MAYS_MISSILES_1:          0x24,
        BILLY_MAYS_MISSILES_2:          0x25,
        ALPHA_PB_MISSILES:              0x29,
        KRAID_MISSILES:                 0x2C,
        CATHEDRAL_MISSILES:             0x31,
        CRUMBLE_SHAFT_MISSILES:         0x33,
        CROC_ESCAPE_MISSILES:           0x36,
        HJB_MISSILES:                   0x37,
        COSINE_MISSILES:                0x3A,
        GRAPPLE_MISSILES:               0x3B,
        NORFAIR_RESERVE_MISSILES:       0x3E,
        GREEN_BUBBLES_MISSILES:         0x3F,
        BUBBLE_MOUNTAIN_MISSILES:       0x40,
        SPEED_BOOSTER_MISSILES:         0x41,
        WAVE_MISSILES:                  0x43,
        GT_MISSILES:                    0x46,
        MICKEY_MOUSE_MISSILES:          0x49,
        SPRINGBALL_MAZE_MISSILES:       0x4A,
        THREE_MUSKETEERS_MISSILES:      0x4D,
        WS_MAIN_SHAFT_MISSILES:         0x80,
        WS_RESERVE_MISSILES:            0x82,
        WS_ATTIC_MISSILES:              0x83,
        MAIN_STREET_MISSILES:           0x88,
        MAMA_TURTLE_MISSILES:           0x8B,
        BEACH_MISSILES:                 0x8D,
        FALSE_WALL_MISSILES:            0x8E,
        MARIDIA_RESERVE_MISSILES:       0x90,
        MARIDIA_SAND_PIT_MISSILES:      0x92,
        AQUEDUCT_MISSILES:              0x94,
    },
    SuperMissiles: {
        CRATERIA_SUPERS:                0x0B,
        SPORE_SPAWN_SUPERS:             0x0E,
        EARLY_SUPERS:                   0x10,
        ETECOON_SUPERS:                 0x1F,
        GT_SUPERS:                      0x47,
        WS_LEFT_SUPERS:                 0x85,
        WS_RIGHT_SUPERS:                0x86,
        CRAB_SUPERS:                    0x89,
        BEACH_SUPERS:                   0x8C,
        AQUEDUCT_SUPERS:                0x95,
        PRECIOUS_MISSILES:              0x97,
    },
    PowerBombs: {
        CRATERIA_PBS:                   0x00,
        ETECOON_PBS:                    0x0D,
        MISSION_IMPOSSIBLE_PBS:         0x18,
        RETRO_BRINSTAR_PBS:             0x1B,
        BETA_PBS:                       0x27,
        ALPHA_PBS:                      0x28,
        CROC_PBS:                       0x39,
        SPRINGBALL_MAZE_PBS:            0x4B,
        PBS_OF_SHAME:                   0x4C,
        MARIDIA_SAND_PIT_PBS:           0x93,
    },
    EnergyTanks: {
        GAUNTLET_ETANK:                 0x05,
        TERMINATOR_ETANK:               0x08,
        RETRO_BRINSTAR_ETANK:           0x1D,
        ETECOON_ETANK:                  0x1E,
        WATERWAY_ETANK:                 0x21,
        WAVE_GATE_ETANK:                0x23,
        KRAID_ETANK:                    0x2B,
        CROC_ETANK:                     0x34,
        HJB_ETANK:                      0x38,
        RIDLEY_ETANK:                   0x4E,
        FIREFLEAS_ETANK:                0x50,
        WS_ETANK:                       0x84,
        MAMA_TURTLE_ETANK:              0x8A,
        BOTWOON_ETANK:                  0x98,
    },
    ReserveTanks: {
        BRINSTAR_RESERVE_TANK:          0x11,
        NORFAIR_RESERVE_TANK:           0x3D,
        WS_RESERVE_TANK:                0x81,
        MARIDIA_RESERVE_TANK:           0x91,
    },
    Equipment: {
        BOMBS:                          0x07,
        CHARGE_BEAM:                    0x17,
        MORPH_BALL:                     0x1A,
        XRAY_SCOPE:                     0x26,
        SPAZER_BEAM:                    0x2A,
        VARIA_SUIT:                     0x30,
        ICE_BEAM:                       0x32,
        HI_JUMP_BOOTS:                  0x35,
        GRAPPLE_BEAM:                   0x3C,
        SPEED_BOOSTER:                  0x42,
        WAVE_BEAM:                      0x44,
        SCREW_ATTACK:                   0x4F,
        GRAVITY_SUIT:                   0x87,
        PLASMA_BEAM:                    0x8F,
        SPRINGBALL:                     0x96,
        SPACE_JUMP:                     0x9A,
    },
}