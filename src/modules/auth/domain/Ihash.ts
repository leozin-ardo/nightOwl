export type encryptDTO = {
  textToEncrypt: string;
  roundsToSalt: number;
};

export type decryptDTO = {
  text: string;
  hashTextToCompare: string;
};

export default interface IHash {
  encrypt(payload: encryptDTO): string;
  compare(payload: decryptDTO): boolean;
}
