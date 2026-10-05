"""Scratch module."""

def flatten(xs):
    return [y for x in xs for y in x]

if __name__ == "__main__":
    print(most_common("abracadabra"))
