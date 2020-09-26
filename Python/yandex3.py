import sys
a = sys.stdin.readline().strip()
b = sys.stdin.readline().strip()
c = 0
for j in a:
  for i in b:
    if i == j:
      c += 1
print(c)
