// Rewrite this in Unit Test

const cs = require("./caesarCipher");

test('one', () => {
  expect(cs("Boy! What a string!", -5)).toEqual("Wjt! Rcvo v nomdib!");
});

test('two', () => {
  expect(cs("Hello zach168! Yes here.", 5)).toEqual("Mjqqt efhm168! Djx mjwj.");
});

test('three', () => {
  expect(cs("Hello Zach168! Yes here.", -5)).toEqual("Czggj Uvxc168! Tzn czmz.");
});
