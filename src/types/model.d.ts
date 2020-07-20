interface ConfigOptions {
  unknownField?: "include" | "exclude";
}

interface ApiMap {
  [key: string]: MapKey | MapOptions;
}

type MapKey = string | string[];

interface MapOptions {
  _key?: string;
  _formatter?: <Data, Res>(data: Data, source?: ApiMap) => Res;
  _includeKeys?: string[];
  _excludeKeys?: string[];

  [key: string]: any;
}
