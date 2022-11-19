import sha256 from 'crypto-js/sha256';

export default class HashService {
    static hash(password: string): string {
        const sha256Hash = sha256(password);
        return sha256Hash.toString();
    }
}
