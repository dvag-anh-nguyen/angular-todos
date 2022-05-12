import {startsWithUpperCase} from "./StringUtils";

describe('StringUtils', ()=>{
  it('startsWithUpperCase should work', ()=>{
    expect(startsWithUpperCase('F11')).toBeTruthy()
  })
})
