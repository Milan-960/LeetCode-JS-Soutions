// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order

// ANS

var mergeTwoLists = function (list1, list2) {
  // create a dummy head node to simplify the code
  let dummyHead = new ListNode(0);
  let currentNode = dummyHead;

  // loop through the lists while both are not empty
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }

  // append any remaining nodes from list1 or list2
  if (list1 !== null) {
    currentNode.next = list1;
  } else {
    currentNode.next = list2;
  }

  // return the merged list (excluding the dummy head)
  return dummyHead.next;
};
