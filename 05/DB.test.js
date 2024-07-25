import DB from './DB';

describe('DB', () => {
  let db;

  beforeEach(() => {
      db = new DB();
  });

  test('should insert data with an explicit ID', async () => {
    const data = { id: 1, name: 'Test' };
    const result = await db.insert(data);
    expect(result).toEqual(data);
    expect(db._rows).toContainEqual(data);
  });

  test('should insert data without an explicit ID and generate a new ID', async () => {
    const data = { name: 'Test' };
    const result = await db.insert(data);
    expect(result.id).toBe(1);
    expect(result.name).toBe('Test');
    expect(db._rows).toContainEqual(result);
  });

  test('should not allow inserting data with a non-number ID', async () => {
    expect.assertions(1);
    const data = { id: 'a', name: 'Test' };
    try {
        await db.insert(data);
    } catch (error) {
        expect(error).toBe('ID can be only number!');
    }
  });

  test('should not allow inserting data with a duplicate ID', async () => {
    expect.assertions(1);
    const data1 = { id: 1, name: 'Test1' };
    const data2 = { id: 1, name: 'Test2' };
    await db.insert(data1);
    try {
        await db.insert(data2);
    } catch (error) {
        expect(error).toBe('ID can\'t be duplicated!');
    }
  });
});