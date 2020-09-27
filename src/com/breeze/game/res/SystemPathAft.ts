module qmr
{
    export class SystemPathAft
    {    
        public static get mapPath(): string {
            return PlatformConfig.webRoot + "map/"; 
        }
        public static get effectPath(): string {
            return PlatformConfig.webRoot + "effect/";
        }
        public static get headPath(): string {
            return PlatformConfig.webRoot + "icon/head/";
        }
        public static get uieffect(): string {
            return PlatformConfig.webRoot + "effect/ui/";
        }
        public static get bgPath(): string {
            return PlatformConfig.webRoot + "unpack/bg/"; 
        }

        public static get unpack_battle(): string {
            return PlatformConfig.webRoot + "unpack/battle/"; 
        }
    }
}
