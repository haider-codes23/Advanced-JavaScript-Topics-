In Low level languages when we create an object we allocate memory to it, amd when we are done we have to reallocate memory. But in JS we don’t have this concept. When we create an object, memory is automatically allocated to the object, next we can use that and when we are done using it, we dont have to deallocate memory. So Js Engine has a garbage collector of its own, it’s job is to find variables or constant that are no longer used and then deallocate the memory that was allocated to them earlier. We have no control over that. 