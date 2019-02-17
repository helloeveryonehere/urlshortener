import randomstring from 'randomstring';

export default class UniqueKey {
  static generate() {
    return randomstring.generate(5);
  }
}
