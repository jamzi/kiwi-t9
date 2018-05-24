const keyMap = {
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z']
};

const generateWords = (numbers, includeOnlyRealWords) => {
    const numberString = numbers
        .split('')
        .map(key => keyMap[key]);

    return generateWordsCombinations(numberString);
}

const generateWordsCombinations = (keys) => {
	if (keys.length == 0) { return []; }
    else if (keys.length == 1) { return keys[0] }
    
	const firstKey = keys[0];
	const secondKey = keys[1];
    let result = [];
    
	for (let i = 0; i <= firstKey.length - 1; i++) 
	{
		for (let j = 0; j <= secondKey.length - 1; j++) 
		{
			result.push( firstKey[i] + secondKey[j]);
		}
    }

	return generateWordsCombinations([result, ...keys.slice(2)])
}

module.exports = generateWords;