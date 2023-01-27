function createCube(size) {
        let h = []
        let t = []
        for(let i = 1; i <= size; i++) {
          head.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size))
          tail.push(" ".repeat(i - 1) + "\\/".repeat(size - (i - 1)) + "_/".repeat(size))
        }
        return [...h, ...t].join("\n")
      }