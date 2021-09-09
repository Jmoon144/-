# 구구단 문제
# num이 숫자를 받기 때문에 int, input으로 받습니다.
num = int(input('숫자를 입력해주세요 = '))

# 1에서 9까지 숫자가 나오도록 for문을 돌립니다.
for i in range(1, 10):
    print(num, 'X', i, '=', num*i)