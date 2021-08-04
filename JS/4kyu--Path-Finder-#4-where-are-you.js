/***************************************************************************************************************************************************************************************************************************************
 *
 *     KATA: 4 kyu "Path Finder *4: where are you?"
 *
 *   SOURCE: https://www.codewars.com/kata/5a0573c446d8435b8e00009f
 *   AUTHOR: https://www.codewars.com/users/GordonBreazz
 *
 *     PLOT: Hey, Path Finder, where are you?
 *
 *           Examples:
 *                i_am_here("RLrl")      // returns [0, 0]
 *                i_am_here("r5L2l4")    // returns [4, 3]
 *                i_am_here("r5L2l4")    // returns [0, 0]
 *
 ****************************************************************************************************************************************************************************************************************************************/

const run = (x, y, angle, steps) => {
    let dx = 0,
        dy = 0
    if (angle === 0 || 
        angle === 360) dx = -1
    if (angle === 180) dx = 1
    if (angle === 90)  dy = 1
    if (angle === 270) dy = -1
    x += steps * dx
    y += steps * dy
    return [x, y]
}

// @param string "path" is a set of actions. To solve the problem, you need to keep the current position and 
// angle of rotation between functions call
//
// Values "l" and "r" - rotate left and right 90 degrees
// Values "L" and "R" - turn left and right 180 degrees      
function IamHere(path) {  
    if (path === "") return [0, 0]
    
    let x = 0,
        y = 0,
        angle = 0
    try {
        [x, y, angle] = IamHere.pos
    } catch (e) {
        IamHere.pos = [x, y, angle]
    }

    let steps = "",
        commands = [],
        commandSet = new Set("lrLR")

    for (let cmd of path) {
        if (commandSet.has(cmd)) {
            if (steps.length > 0) {
                commands.push(Number(steps))
                steps = ""
            }
            commands.push(cmd)
        } else 
            steps += cmd
    }

    if (steps.length > 0)
        commands.push(Number(steps))

    for (let cmd of commands) {
        if (cmd === "L") angle -= 180
        if (cmd === "R") angle += 180
        if (cmd === "r") angle += 90
        if (cmd === "l") angle -= 90
        if (!commandSet.has(cmd))
            [x, y] = run(x, y, angle, cmd)
        if (angle < 0) angle += 360
        if (angle >= 360) angle -= 360
    }
    IamHere.pos = [x, y, angle]    
    return [x, y]
}

module.exports = {IamHere}

