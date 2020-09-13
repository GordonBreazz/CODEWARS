const { sortCsvColumns } = require("../6kyu--Sort-the-columns-of-a-csv-file.js")

describe('"Sort the columns of a csv-file:', function () {
    test("#1", () => {
      expect(sortCsvColumns("myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n17945;10091;10088;3907;10132\n2;12;13;48;11")).toEqual("Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n3907;17945;10091;10088;10132\n48;2;12;13;11")
    })
    test("#2", () => {
      expect(sortCsvColumns("IronMan;Thor;Captain America;Hulk\n"
      + "arrogant;divine;honorably;angry\n"
      + "armor;hammer;shield;greenhorn\n"
      + "Tony;Thor;Steven;Bruce")).toEqual("Captain America;Hulk;IronMan;Thor\n"
      + "honorably;angry;arrogant;divine\n"
      + "shield;greenhorn;armor;hammer\n"
      + "Steven;Bruce;Tony;Thor")
    })
})

