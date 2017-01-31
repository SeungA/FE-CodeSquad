# 이벤트 전파
부모 - 자식의 계층 구조로 이루어진 각각의 요소(Element)에 이벤트를 부여할때 이벤트 발생순서를 정한다.


## EventTarget.addEventListener()
addEventListener() 메서드는 지정된 요소'EventTarget'에 이벤트 핸들러를 연결한다.

## Syntax
```javascript
element.addEventListener(event, function, useCapture);
```
* event : 이벤트 유형 ex) 'click', 'mousedown')
* function : 이벤트가 발생할 때 호출 할 함수
* useCapture(선택적) : 이벤트 버블 링 또는 이벤트 캡처를 사용할지 여부를 지정하는 boolean 값

## Event Bubbling
버블링(false)는 자식요소부터 이벤트가 발생하여 부모요소로 이벤트 전파

## Event Capturing
캡쳐링은(true) 부모요소부터 이벤트가 발생하여 자식요소로 이벤트 전파
