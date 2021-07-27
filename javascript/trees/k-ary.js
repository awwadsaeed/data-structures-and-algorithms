class Node {
    constructor(value=null,childrenNum=null) {
        this.value = value;
        this.childrenNum=childrenNum;
        for(let i=1;i<=childrenNum;i++){
          this[`child${i}`]=(new Node())
        }
      }
}

class KaryTree{
  constructor(){
    this.root=null;
  }
  add(node1){
    if(!this.root){
      this.root=node1;
    }else{
      if(node1.childrenNum>this.root.childrenNum){
        return 'this curr has more children than max';
      }else{
        _moveAndAdd(this.root);
      }
    function _moveAndAdd(curr){
          let checkspace=false;
          for(let i=1; i<=curr.childrenNum;i++){
            if(curr[`child${i}`].value==null){
              checkspace=true;
            }
          }
          if(checkspace){
                for(let i=1;i<=curr.childrenNum;i++){
                  if(curr[`child${i}`].value==null){
                  curr[`child${i}`]=node1;
                  break;
                 }
               }
          }else{
            for (let i=1;i<=curr.childrenNum;i++) {
              if(curr[`child${i}`][`child${curr[`child${i}`].childrenNum}`].value==null){
              _moveAndAdd(curr[`child${i}`]);
                break;
              }
            }
        }
      }
    }
  }
}

function fizzBuzz(tree){
    let tutu = new KaryTree();
     let root = {...tree.root};
      if (!tree.root) {
        return 'the tree is empty';
      }
        if(root.value%3==0&&root.value%5!==0){
          root.value='fizz';
        }else if(root.value%3==0&&root.value%5==0){
          root.value='fizzBuzz';
        }else if(root.value%5==0&&root.value%3!==0){
          root.value='Buzz';
        }else{
          root.value=root.value.toString();
        }
        tutu.add(new Node(root.value,root.childrenNum));
        move(root);
        function move(curr){
          for(let i=1;i<=curr.childrenNum;i++){
            if(curr[`child${i}`].value!==null){
              if(curr[`child${i}`].value%3==0&&curr[`child${i}`].value%5!==0){
              curr[`child${i}`].value='fizz';
            }else if(curr[`child${i}`].value%3==0&&curr[`child${i}`].value%5==0){
              curr[`child${i}`].value='fizzBuzz';
            }else if(curr[`child${i}`].value%5==0&&curr[`child${i}`].value%3!==0){
              curr[`child${i}`].value='Buzz';
            }else{
              curr[`child${i}`].value=curr[`child${i}`].value.toString();
            }
            }
          }
          for(let i=1;i<=curr.childrenNum;i++){
            move(curr[`child${i}`])
          }
        }
      return root;
  }


  module.exports={
      KaryTree,
      fizzBuzz,
      Node,
  }