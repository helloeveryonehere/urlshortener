import path from 'path'
import fs from 'fs'

import Shortener from '../src/usecases/Shortener'
import UniqueKeyGenerator from '../src/infrastructures/UniqueKey'
import DbAdapter from '../src/infrastructures/JsonDb'
import DbInterface from '../src/interfaces/Db'

test('Shortener usecase', () => {
  const testDbPath = path.resolve('./db/data.test.json')
  const dbAdapter = new DbAdapter(testDbPath)
  const dbInterface = new DbInterface({ dbAdapter })
  const newShortener = new Shortener({
    keyGenerator: UniqueKeyGenerator,
    dbInterface
  })

  const newUrlObj = newShortener.createNewShortUrl('http://dummy.com')
  
  console.log('new url obj is')
  console.log(newUrlObj)
  
  expect(newUrlObj.originalUrl).toEqual('http://dummy.com')
  expect(newUrlObj.shortKey).toMatch(new RegExp('[\\d\\w]{5}'))
})
