function knightMoves(start, end){
    if(start[0] === end[0] && start[1] === end[1]){
        return [start];
    }

    const moves = [[2, 1], [2, -1], [-2, 1], [-2, -1],
                   [1, 2], [1, -2], [-1, 2], [-1, -2]];

    const queue = [[start, [start]]];
    const visited = new Set();

    while(queue.length > 0){
        let [[x,y], path] = queue.shift();

        for(let [dx, dy] of moves){
            let nx = x + dx, ny = y + dy;
            let newPosition = `${nx},${ny}`;

            if(nx===end[0] && ny === end[1]){
                const realPath = [...path, [nx, ny]];
                console.log(`You made it in ${realPath.length} moves!  Here's your path:`);
                for (let move of realPath){
                    console.log(move)
                }
                return realPath;
            }

            if(nx >= 0 && ny >= 0 && nx < 8 && ny < 8 && !visited.has(newPosition)){
                visited.add(newPosition);
                queue.push([[nx,ny], [...path, [nx, ny]]]);
            }
        }
    }
}
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);