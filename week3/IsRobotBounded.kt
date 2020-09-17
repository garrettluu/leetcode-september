class Solution {
    fun isRobotBounded(instructions: String): Boolean {
        // Initial coords
        var x: Int = 0;
        var y: Int = 0;
        var current: Char = 'n';
        for (instr in instructions) {
            when (instr) {
                'G' -> {
                    when (current) {
                        'n' -> y++
                        's' -> y--
                        'e' -> x++
                        'w' -> x--
                    }
                }
                else -> {
                    current = turn(current, instr);
                }
            }
        }

        if (x == 0 && y == 0) {
            return true
        }

        if (current != 'n') {
            return true
        }
        return false
    }

    fun turn(current: Char, instr: Char): Char {
        when (current) {
            'n' -> return if (instr == 'L') 'w' else 'e'
            's' -> return if (instr == 'L') 'e' else 'w'
            'e' -> return if (instr == 'L') 'n' else 's'
            'w' -> return if (instr == 'L') 's' else 'n'
            else -> {
                return current;
            }
        }
    }
}