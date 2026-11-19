export type Game = {
  id: string;
  title: string;
  description: string;
  genre: string;
  company: string;
};

export const games: Game[] = [
  {
    id: "zelda-tears",
    title: "仮 ゼルダの伝説 ティアーズ オブ ザ キングダム",
    description:
      "広大なフィールドと自由な発想でできる遊びが楽しめるアクションアドベンチャーです。",
    genre: "アクション",
    company: "Nintendo",
  },
  {
    id: "valorant",
    title: "仮 VALORANT",
    description:
      "個性あるキャラクターと戦略的な対戦が楽しめるチーム型FPSです。",
    genre: "基本プレイ無料",
    company: "Riot Games",
  },
  {
    id: "dark-souls",
    title: "仮 DARK SOULS",
    description: "探索・戦闘・高難易度を特徴とするアクションRPG。",
    genre: "RPG",
    company: "FromSoftware",
  },
  {
    id: "pokemon",
    title: "仮 ポケットモンスターシリーズ",
    description:
      "仲間のポケモンと冒険を進める、やりこみ要素も豊富なRPGシリーズです。",
    genre: "RPG",
    company: "The Pokemon Company",
  },
];
