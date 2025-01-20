const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = `13
0
1
2
0
0
3
2
1
0
0
0
0
0`;

const N = Number(input[0]); // 개수
const values = input.slice(1);

class PriorityQueue {
  #compare = (a, b) => a - b;
  #heap = new Array(64);
  #setPosition;
  #size = 0;

  constructor(comparator, setPosition) {
    if (comparator !== undefined)
      // comparator 할당하여 정렬 정책 설정
      this.#compare = comparator;
    if (setPosition !== undefined)
      // setPosition 할당하여 삽입된 요소의 위치 추적 · 변경
      this.#setPosition = setPosition;
  }

  insertValue(value) {
    const heap = this.#heap;
    const pos = ++this.#size;
    // 맨 뒤에 값을 넣음
    heap[pos] = value;

    if (heap.length === pos) {
      heap.length *= 2; // 힙이 가득찬 경우, 배열 길이 증가
    }
    this.percolateUp(pos);
  }

  percolateUp() {}
}

const priorityQueue = new PriorityQueue();

for (let i = 1; i <= N; i++) {
  const currentValue = Number(values[i]);

  if (currentValue === 0) {
    // popup
  }
}
