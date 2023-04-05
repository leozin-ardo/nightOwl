import { Injectable } from '@nestjs/common';
import { compareSync as compare, hashSync as hash } from 'bcrypt';
import IHash, { decryptDTO, encryptDTO } from '../domain/Ihash';

@Injectable()
export default class BcryptHashser implements IHash {
  encrypt(payload: encryptDTO): string {
    try {
      const { roundsToSalt, textToEncrypt } = payload;
      return hash(textToEncrypt, roundsToSalt);
    } catch (err) {
      return null;
    }
  }

  compare(payload: decryptDTO): boolean {
    try {
      const { hashTextToCompare, text } = payload;
      compare(text, hashTextToCompare);
      return compare(text, hashTextToCompare);
    } catch (err) {
      return false;
    }
  }
}
