//Bob needs a fast way to calculate the volume of a cuboid with three values: 
//the length, width and height of the cuboid. Write a function to help Bob with this calculation. (codewars)

class Kata {
    static getVolumeOfCuboid(l,w,h) {
        return l*w*h
    }
}

console.log(Kata.getVolumeOfCuboid(1,2,3))
console.log(Kata.getVolumeOfCuboid(4,6,7))