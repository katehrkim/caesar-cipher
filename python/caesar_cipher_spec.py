# Rewrite this in Unit Test
import unittest
from caesar_cipher import caesar_cipher

class CaesarCipherTestCase(unittest.TestCase):
    """Tests for caesar_cipher.py"""

    def test_one(self):
        self.assertEqual(caesar_cipher("Boy! What a string!", -5), "Wjt! Rcvo v nomdib!")

    def test_two(self):
        self.assertEqual(caesar_cipher("Hello zach168! Yes here.", 5), "Mjqqt efhm168! Djx mjwj.")

    def test_three(self):
        self.assertEqual(caesar_cipher("Hello Zach168! Yes here.", -5), "Czggj Uvxc168! Tzn czmz.")

if __name__ == '__main__':
    unittest.main()