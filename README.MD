### Mock Data easily




[nested_div0_0]
nested_div[0_1]
nested_div[1_2]
[nested_div[123]]


nested_div 




we must keep track of the nested level in order to make this work properly. 
If we have for exmaple a nested_div, we should track nested_div0_0, nested_div0_1, ..., nested_div 0_k
We also shoud keep track of other levels. 

The best idea for now is to hard code the levels. 


nested0_0_0_0
nested1_0_0_0

etc.


We need to iterate through it 

if currently nested = 1


{
currenltyNested = 1
  "posts": [
    startNesting1                                           
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],

  currentyNested = 1 && newNestDetected = 1
} ], "
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}