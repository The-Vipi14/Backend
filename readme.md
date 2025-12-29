Types of module in Node.js

1. local module (user defined/custom)
                |- modules that you create yourself in your project.
    
    export const sum = (a, b)=>{
        return a + b;
    }


2. Third party modules (npm modules)
                |- that we install from npm


3. global module / Builtin module
            
            (i) global core module--- (don't need to require them)
                        [
                            console.log()
                            buffer
                        ]
            (ii) Non-global core (we have to require them)
            [
                path
                fs
                os
                http
            ]