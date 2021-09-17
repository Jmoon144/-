# 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

# 재한사항
# s는 길이가 1 이상, 100이하인 스트링입니다.
# 입출력 예
# s	       return
# "abcde"	"c"
# "qwer"	"we"

def solution(s):
    answer = ''
    
    a = len(s) // 2
    print(a)
    if len(s) % 2 == 1:
        answer = s[a]
    else:
        answer = s[a-1:a+1]
    print(answer)

solution(s='qwertyui')

# 풀이
# 먼저 a 라는 변수를 지정해서 s의 중간의 숫자를 가져옵니다.
# if문을 돌려서 len(s) % 2 == 1 을 해서 나머지가 1인 값(즉 홀수) 찾고
# answer에 s의 a번째 숫자를 넣어줍니다.
# if가 아닐때는 else문을 써서 즉 s가 짝수인 숫자는 중간값이 두개이기 때문에 a-1, a+1을 해줍니다.