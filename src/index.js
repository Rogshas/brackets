module.exports = function check(str, bracketsConfig) {
    
        let x = str.length + 1;
        while(str = str.replace(/\<\>|\[\]|\{\}|\(\)|\|\||12|34|56|77|88/,'')){
            if(str.length == x && x!=0)return false;
            if(x==0)return true;
            x=str.length;
        }
        return true;
    
    }


