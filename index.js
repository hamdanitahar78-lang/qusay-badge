import { logger } from "@revenge-mod/plugin";

export default {
  onLoad() {
    logger.log("♡ QUSAYCORE badge loaded!");
  },

  onUnload() {
    logger.log("♡ QUSAYCORE badge unloaded!");
  }
};
