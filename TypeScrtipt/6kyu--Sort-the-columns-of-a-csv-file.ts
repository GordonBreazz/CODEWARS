/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 6 kyu "Sort the columns of a csv-file"
*
*   SOURCE: https://www.codewars.com/kata/57f7f71a7b992e699400013f
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: #Sort the columns of a csv-file
*           
*           You get a string with the content of a csv-file. The columns are separated by semicolons.
*           The first line contains the names of the columns.
*           Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.
*           
*           An example:
*           
*           Before sorting:
*               As table (only visualization):
*               |myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
*               |17945       |10091    |10088  |3907   |10132          |
*               |2           |12       |13     |48     |11             |
*           
*           The csv-file:
*               myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
*               17945;10091;10088;3907;10132\n
*               2;12;13;48;11
*           
*           ----------------------------------
*           
*           After sorting:
*           As table (only visualization):
*               |Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
*               |3907   |17945       |10091    |10088  |10132          |
*               |48     |2           |12       |13     |11             |
*           
*           The csv-file:
*               Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
*               3907;17945;10091;10088;10132\n
*               48;2;12;13;11
*           There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.
*           
*           Have fun coding it and please don't forget to vote and rank this kata! :-)
*           
*           I have created other katas. Have a look if you like coding and challenges.
*
***************************************************************************************************************************************************************************************************************************************/

export function sortCsvColumns(csvFileContent: string): string {
  let list: string[] = csvFileContent.split("\n")
  let rows: string[][] = []
  for (let item of list)
    rows.push(item.split(";"))
  let order: number[] = list[0]
    .split(";")
    .map((x, i) => ({ order: i, val: x }))
    .sort((a, b) => Number(a.val.toLowerCase() > b.val.toLowerCase()))
    .map((x) => x.order)
  rows = rows.map(function (arr) {
    let tmp: string[] = []
    for (let i = 0; i < order.length; i++) 
      tmp.push(arr[order[i]])
    return tmp
  })
  return rows.map((x) => x.join(";")).join("\n")
}
