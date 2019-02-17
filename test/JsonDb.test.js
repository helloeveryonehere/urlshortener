import path from 'path'
import fs from 'fs'

import JsonDB from '../src/infrastructures/JsonDb'

describe('Database actions', () => {
  const testDbPath = path.resolve('./db/data.test.json')
  test('store url into db', () => {
    // ensure json db is empty array
    fs.writeFileSync(testDbPath, JSON.stringify([]))

    const jsonDB = new JsonDB(testDbPath)
    const testUrlObj = {
      key: 'y6d72',
      url: 'https://google.com'
    }
    const testUrlObj2 = {
      key: '88h6R',
      url: 'https://facebook.com'
    }

    jsonDB.storeUrl(testUrlObj)
    expect(JSON.parse(fs.readFileSync(testDbPath))[0]).toEqual({...testUrlObj})
    jsonDB.storeUrl(testUrlObj2)

    expect(jsonDB.getUrlByKey('y6d72')).toEqual({...testUrlObj})
    expect(jsonDB.getUrlByKey('88h6R')).toEqual({...testUrlObj2})

    fs.writeFileSync(testDbPath, JSON.stringify([]))
  })
})