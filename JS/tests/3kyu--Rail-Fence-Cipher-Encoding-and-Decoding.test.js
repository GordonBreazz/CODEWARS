const encodeRailFenceCipher = require('../3kyu--Rail-Fence-Cipher-Encoding-and-Decoding.js');

// Test.assertEquals(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3), "WECRLTEERDSOEEFEAOCAIVDEN");
// Test.assertEquals(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3), "WEAREDISCOVEREDFLEEATONCE");                                                                          
// Test.assertEquals(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l");

test('#1 decodeRailFenceCipher should return WECRLTEERDSOEEFEAOCAIVDEN', () => {
    expect( encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) ).toEqual("WECRLTEERDSOEEFEAOCAIVDEN") 
})

// test('#2 decodeRailFenceCipher should return WEAREDISCOVEREDFLEEATONCE', () => {
//     expect( encodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3) ).toEqual("WEAREDISCOVEREDFLEEATONCE") 
// })

test('#3 decodeRailFenceCipher should return Hoo!el,Wrdl l', () => {
    expect( encodeRailFenceCipher("Hello, World!", 3) ).toEqual("Hoo!el,Wrdl l") 
})
  