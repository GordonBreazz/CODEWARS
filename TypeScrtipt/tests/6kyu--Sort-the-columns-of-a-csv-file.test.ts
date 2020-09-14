import  { sortCsvColumns } = from "../6kyu--Sort-the-columns-of-a-csv-file.ts"

describe('"Sort the columns of a csv-file:', function () {
    test("#1", () => {
      expect(
        sortCsvColumns(
          "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n17945;10091;10088;3907;10132\n2;12;13;48;11"
        )
      ).toEqual(
        "Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n3907;17945;10091;10088;10132\n48;2;12;13;11"
      )
    })
    test("#2", () => {
      expect(
        sortCsvColumns(
          "IronMan;Thor;Captain America;Hulk\narrogant;divine;honorably;angry\narmor;hammer;shield;greenhorn\nTony;Thor;Steven;Bruce"
        )
      ).toEqual(
        "Captain America;Hulk;IronMan;Thor\nhonorably;angry;arrogant;divine\nshield;greenhorn;armor;hammer\nSteven;Bruce;Tony;Thor"
      )
    })
  })