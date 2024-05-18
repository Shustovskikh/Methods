import Character from '../Character';

describe('Character', () => {
  test('should create a new character with valid parameters', () => {
    const character = new Character('Hero', 'Bowman');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should throw an error for invalid name', () => {
    expect(() => new Character('H', 'Bowman')).toThrow('The name must be a string of 2 to 10 characters');
  });

  test('should throw an error for invalid type', () => {
    expect(() => new Character('Hero', 'InvalidType')).toThrow('Incorrect character type');
  });

  test('should level up the character', () => {
    const character = new Character('Hero', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBeCloseTo(30);
    expect(character.defence).toBeCloseTo(30);
    expect(character.health).toBe(100);
  });

  test('should not level up if health is 0', () => {
    const character = new Character('Hero', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Cannot level up a character with 0 health');
  });

  test('should correctly calculate damage', () => {
    const character = new Character('Hero', 'Bowman');
    character.damage(10);
    expect(character.health).toBeCloseTo(92.5);
  });

  test('should not reduce health below 0', () => {
    const character = new Character('Hero', 'Bowman');
    character.damage(200);
    expect(character.health).toBe(0);
  });

  test('should throw an error if damage is applied when health is 0', () => {
    const character = new Character('Hero', 'Bowman');
    character.health = 0;
    expect(() => character.damage(10)).toThrow('Cannot damage a character with 0 health');
  });
});
