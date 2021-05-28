def caesar_cipher(string, shift_amount):
    output = ''
    for letter in string:
        if letter.isalpha():
            int_rep = ord(letter)
            new_int_rep = int_rep + shift_amount
            if letter.islower():
                if new_int_rep < 97:
                    diff = 97 - new_int_rep
                    new_int_rep = 123 - diff
                elif new_int_rep > 122:
                    diff = new_int_rep - 122
                    new_int_rep = diff + 96
            elif letter.isupper():
                if new_int_rep < 65:
                    diff = 65 - new_int_rep
                    new_int_rep = 91 - diff
                elif new_int_rep > 90:
                    diff = new_int_rep - 90
                    new_int_rep = diff + 64
            letter = chr(new_int_rep)
        output += letter
    return output