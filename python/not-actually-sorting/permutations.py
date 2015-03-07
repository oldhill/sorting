####### Hi let's generate all permutations of this string #######

import math

my_string = 'ABCD'
print 'String to permute: %s' % my_string
print 'Expected permutation count: %d' % math.factorial(len(my_string))


####### Wait there's a library for that #######

import itertools

permutation_iterator = itertools.permutations(my_string)
perms_list = [''.join(perm) for perm in permutation_iterator]

print '\nItertools results: %s' % perms_list
print 'Permutation count: %d' % len(perms_list)


####### That was cool but let's try it by hand #######

def permute(input_string):
  """ Recursively generate all permutations of input string
  """
  if len(input_string) == 1:
    return input_string

  # OK the string is greater than length 1. Grab the first character, and then
  # generate all permutations of the remainder of the string. Then finally insert
  # this first character at all points of those permutations, to generate new perms.
  first_char = input_string[0]

  rest_of_string_permutations = permute(input_string[1:])

  result = []

  for existing_permutation in rest_of_string_permutations:
    # Range is from zero to length + 1 of existing permutation string, since we want to
    # generate new permutation strings where the "first_char" is inserted as the first, and also
    # last character of the existing permutation string.
    # E.g. new_permutation at some point equal:
    # empty string + first_char + existing_permutation
    # and then later on:
    # existing_permutation + first_char + empty string
    for i in xrange(len(existing_permutation) + 1):
      new_permutation = existing_permutation[:i] + first_char + existing_permutation[i:]
      result.append(new_permutation)

  return result


# Run it
result = permute(my_string)
print '\nBy hand results: %s' % result
print 'By hand permutation count: %d' % len(result)
