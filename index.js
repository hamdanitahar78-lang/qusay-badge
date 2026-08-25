import { logger } from "@revenge-mod/plugin";

export default {
  onLoad() {
    logger.log("╭──────────────╮");
    logger.log("♡ QUSAYCORE");
    logger.log("♡ Qusay Badge is ON!");
    logger.log("╰──────────────╯");
  },

  onUnload() {
    logger.log("♡ QUSAYCORE Badge OFF");
  }
};
