
import './App.css';

import React, { useState, createRef } from 'react';

/// Calculate current dimensions:::
const useRefDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 })
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimensions({ width: Math.round(width), height: Math.round(height) })
    }
  }, [])
  return dimensions
}

function App() {

///// Data Object ::::
var cvsObj={
  "251": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "261": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "271": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "291": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "298": {
    "Packing box name": "Overpack",
    "Packing case quantity": 1
  },
  "309": {
    "Packing box name": "Overpack",
    "Packing case quantity": 1
  },
  "311": {
    "Packing box name": "Overpack",
    "Packing case quantity": 1
  },
  "314": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "318": {
    "Packing box name": "Overpack",
    "Packing case quantity": 1
  },
  "319": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "326": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "327": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "330": {
    "Packing box name": "Overpack",
    "Packing case quantity": 1
  },
  "332": {
    "Packing box name": "Welder Cart Box",
    "Packing case quantity": 1
  },
  "377": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "410": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "420": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "421": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "430": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "440": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "510": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "512": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "514": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "1687": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "1705": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "1707": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "1710": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "1711": {
    "Packing box name": 18,
    "Packing case quantity": 1
  },
  "1720": {
    "Packing box name": 18,
    "Packing case quantity": 1
  },
  "1721": {
    "Packing box name": 15,
    "Packing case quantity": 1
  },
  "1723": {
    "Packing box name": "1W",
    "Packing case quantity": 1
  },
  "1725": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "1726": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "1753": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "1905": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "10207": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10252": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10260": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "10261": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "10284": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10325": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10366": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10379": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10423": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10429": {
    "Packing box name": "MIG3",
    "Packing case quantity": 1
  },
  "10460": {
    "Packing box name": 18,
    "Packing case quantity": 1
  },
  "10628": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10631": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10830": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "10831": {
    "Packing box name": 18,
    "Packing case quantity": 100
  },
  "10832": {
    "Packing box name": 18,
    "Packing case quantity": 100
  },
  "11333": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "11334": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "11342": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "20007": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "20039": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20040": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20041": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20042": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20043": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20044": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20045": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20046": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20047": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20048": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20049": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20050": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20051": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20052": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20053": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20054": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20055": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20056": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20057": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20058": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20059": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20060": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20061": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20062": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20063": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20064": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20065": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20066": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20067": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20069": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20071": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20187": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20188": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20189": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20190": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20191": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20192": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20193": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20194": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20195": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20196": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20197": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20198": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20199": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20200": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20201": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20202": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20203": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20204": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20205": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20206": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20207": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20208": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20209": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20210": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20211": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20212": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20213": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20214": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20215": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20216": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20217": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "20218": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "20219": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "20234": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20235": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20236": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20237": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20238": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20239": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20240": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20241": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20243": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20247": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20248": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20249": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20251": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20254": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20256": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20257": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20270": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20279": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20294": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20300": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20306": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20315": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20322": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20323": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "20329": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20336": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20339": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20342": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20464": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20465": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20468": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20469": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20470": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20471": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20472": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20473": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20481": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20484": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20485": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20489": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20492": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20493": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20495": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20497": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20498": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20501": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20502": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20504": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20505": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "20506": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20507": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20508": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20509": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20510": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20511": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20512": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20530": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20532": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20536": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20537": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20539": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20541": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20544": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20555": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20561": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20562": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20563": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20564": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20566": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20568": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20569": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20570": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20571": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20572": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20573": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20574": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "20579": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "20580": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "20581": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "20582": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "20583": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "20587": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "20588": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "20591": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "20593": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "20595": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "20597": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "20603": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "20607": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "20610": {
    "Packing box name": "3 ft",
    "Packing case quantity": 3
  },
  "20657": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20658": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20659": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20660": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20661": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20662": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20663": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20664": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20665": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20666": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20668": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20669": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20670": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20672": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20673": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20674": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20676": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20680": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20681": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20682": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20683": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20684": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20685": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20686": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20688": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20690": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "20692": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "20694": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20695": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "20705": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20707": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20709": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20712": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20714": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20716": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20718": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20720": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20722": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20724": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20725": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20727": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20728": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20731": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20732": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20734": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20735": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20736": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20738": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20740": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20742": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20744": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20745": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20746": {
    "Packing box name": "MIG3",
    "Packing case quantity": 3
  },
  "20748": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "20749": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "20750": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "20752": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "20753": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20755": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20756": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20757": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20758": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20759": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20761": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20762": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20763": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20764": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20824": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20843": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20856": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "20857": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20858": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "20859": {
    "Packing box name": 13,
    "Packing case quantity": 1
  },
  "20860": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20861": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20862": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20863": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20864": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20865": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20866": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20867": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20868": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20872": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20882": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20885": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20889": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20891": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20892": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20894": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20907": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20909": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20916": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20919": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20920": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20921": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20924": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20939": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20940": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20941": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20942": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20944": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20948": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20963": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20968": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20969": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20970": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20972": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "20974": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "20988": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20989": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20990": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20992": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "20997": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21007": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21009": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21010": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21012": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21022": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21023": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21029": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21031": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21035": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21141": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21144": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21145": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21146": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21147": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21151": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21153": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21154": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21155": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21156": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21157": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21158": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21159": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21160": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21161": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21164": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21167": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21172": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21173": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21174": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21177": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21178": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21185": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21186": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21187": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21188": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21253": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "21277": {
    "Packing box name": 15,
    "Packing case quantity": 6
  },
  "21278": {
    "Packing box name": "F1",
    "Packing case quantity": 30
  },
  "21279": {
    "Packing box name": "F1",
    "Packing case quantity": 30
  },
  "21280": {
    "Packing box name": "F1",
    "Packing case quantity": 30
  },
  "21285": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21286": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21287": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21291": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "21292": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21294": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21302": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "21305": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22522": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22526": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22530": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22532": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22536": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22537": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22539": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22541": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "22863": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22864": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22865": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22866": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22889": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22891": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22892": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22894": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22939": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22940": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22941": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22942": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22944": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22987": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22988": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22989": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22990": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22992": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22993": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "22996": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23029": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23142": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23143": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23144": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23145": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23146": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23158": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23159": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23161": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "23163": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "25101": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "29801": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "30301": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "30305": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "30401": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "30405": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "30410": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "30505": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "30510": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "30680": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "30681": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "30684": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "30685": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "30686": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "30689": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "30690": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "30701": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "30705": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "30801": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "30805": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "30810": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "30905": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "30910": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "30951": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 30
  },
  "31101": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "31105": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "31201": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "31205": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "31210": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "31305": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "31310": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "31610": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "32001": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "32005": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "32101": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "32105": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "32110": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "32205": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 8
  },
  "32210": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "37025": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "37027": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 12
  },
  "37028": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 12
  },
  "37030": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "37031": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 12
  },
  "37250": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "38050": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38051": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38052": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38060": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "38061": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "38062": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "38070": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38071": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38072": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38073": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38101": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38102": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38103": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38106": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38108": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38109": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38110": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38111": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "38116": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "38120": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38125": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "38140": {
    "Packing box name": 8,
    "Packing case quantity": 144
  },
  "38141": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "40102": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "40202": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "42276": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42281": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42282": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42285": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "42286": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "42287": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "42290": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 20
  },
  "42291": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 20
  },
  "42292": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 20
  },
  "42293": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "42294": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "42295": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "42296": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "42298": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "42300": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 20
  },
  "42301": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "42302": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 20
  },
  "42303": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "42326": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "42327": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "42330": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "42335": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "42340": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "42401": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "42405": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "42447": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42450": {
    "Packing box name": "MIG3",
    "Packing case quantity": 1
  },
  "42451": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42453": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42455": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42460": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42462": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42463": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42466": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "42536": {
    "Packing box name": 15,
    "Packing case quantity": 1
  },
  "42801": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "43401": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "44557": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "44560": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45300": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45301": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45400": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45401": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45460": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45461": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45464": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45465": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45889": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "45902": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "46111": {
    "Packing box name": "3 ft",
    "Packing case quantity": 6
  },
  "47300": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "47305": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "48300": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "48305": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "48490": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "48492": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "48493": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "48495": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "48496": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 3
  },
  "48500": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "48504": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "48510": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 3
  },
  "48520": {
    "Packing box name": "3 ft",
    "Packing case quantity": 2
  },
  "48524": {
    "Packing box name": "3 ft",
    "Packing case quantity": 2
  },
  "48571": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "49200": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49201": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49204": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49205": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49208": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49210": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49211": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49212": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49213": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49220": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49221": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49222": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49223": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49224": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49225": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49229": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49234": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49235": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49236": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49237": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49238": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49239": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49240": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49241": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49250": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49251": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49252": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49253": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49260": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49261": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49262": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49263": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49264": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49265": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49270": {
    "Packing box name": "Flat F1",
    "Packing case quantity": 5
  },
  "49274": {
    "Packing box name": "Flat 13",
    "Packing case quantity": 5
  },
  "49276": {
    "Packing box name": "Flat 18",
    "Packing case quantity": 5
  },
  "49320": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49321": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49322": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49323": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49324": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49326": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49327": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49330": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49331": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49350": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49351": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49352": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49353": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49354": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49355": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49356": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49357": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49358": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49359": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49360": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49361": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49380": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49381": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49382": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49383": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49391": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49392": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49400": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49402": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49410": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49411": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49412": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49413": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49414": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49415": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49416": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49417": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49418": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49419": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49420": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49421": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49422": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49423": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49424": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49425": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49426": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49427": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49428": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49429": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49430": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49431": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49432": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49433": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49434": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49435": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49436": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49437": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49438": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49439": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49440": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49441": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49442": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49445": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49446": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49447": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49449": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49450": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49451": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49452": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49453": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49454": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49455": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49456": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49470": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49471": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49472": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49473": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49474": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49475": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49476": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49477": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49478": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49479": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49480": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49481": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49482": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49483": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49484": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49485": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49486": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49487": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49488": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49489": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49490": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49491": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49492": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49493": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49494": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49495": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49496": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49497": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49498": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49499": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49500": {
    "Packing box name": "3 ft",
    "Packing case quantity": 1
  },
  "49501": {
    "Packing box name": "4 ft",
    "Packing case quantity": 3
  },
  "49520": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49521": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49522": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49523": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49524": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49525": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49526": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49527": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49528": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49529": {
    "Packing box name": "3 ft",
    "Packing case quantity": 3
  },
  "49530": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49531": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49540": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49541": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49542": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49543": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49544": {
    "Packing box name": "3 ft",
    "Packing case quantity": 3
  },
  "49546": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49547": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49548": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49549": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49550": {
    "Packing box name": "6 ft",
    "Packing case quantity": 3
  },
  "49552": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49570": {
    "Packing box name": "Flat F1",
    "Packing case quantity": 5
  },
  "49575": {
    "Packing box name": "Flat 18",
    "Packing case quantity": 5
  },
  "49584": {
    "Packing box name": "Flat 13",
    "Packing case quantity": 5
  },
  "49585": {
    "Packing box name": "Flat 18",
    "Packing case quantity": 5
  },
  "49600": {
    "Packing box name": "Flat 18",
    "Packing case quantity": 1
  },
  "49611": {
    "Packing box name": "Flat 18",
    "Packing case quantity": 1
  },
  "49612": {
    "Packing box name": "Flat 18",
    "Packing case quantity": 1
  },
  "49613": {
    "Packing box name": "Flat 18",
    "Packing case quantity": 1
  },
  "49614": {
    "Packing box name": "Flat 18",
    "Packing case quantity": 1
  },
  "49620": {
    "Packing box name": "Flat F1",
    "Packing case quantity": 5
  },
  "49625": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49630": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49632": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49634": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49640": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49641": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49642": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49645": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49646": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49647": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49650": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49651": {
    "Packing box name": "4 ft",
    "Packing case quantity": 5
  },
  "49652": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49660": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49662": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49663": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49665": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49666": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49668": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49669": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49671": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49672": {
    "Packing box name": "6 ft",
    "Packing case quantity": 5
  },
  "49674": {
    "Packing box name": "3 ft",
    "Packing case quantity": 3
  },
  "49675": {
    "Packing box name": "6 ft",
    "Packing case quantity": 3
  },
  "49676": {
    "Packing box name": "3 ft",
    "Packing case quantity": 3
  },
  "49677": {
    "Packing box name": "3 ft",
    "Packing case quantity": 3
  },
  "49678": {
    "Packing box name": "3 ft",
    "Packing case quantity": 3
  },
  "49685": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49686": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49687": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49688": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49689": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49690": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49691": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49692": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49695": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49696": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49697": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49698": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49699": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49700": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49701": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49702": {
    "Packing box name": "3 ft",
    "Packing case quantity": 5
  },
  "49711": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49712": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49713": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49714": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49715": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49716": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49717": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "49728": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "49729": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "49730": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "49731": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "49732": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "52018": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52019": {
    "Packing box name": 13,
    "Packing case quantity": 1
  },
  "52020": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52021": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52023": {
    "Packing box name": 13,
    "Packing case quantity": 1
  },
  "52024": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52025": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52090": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52091": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52102": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52103": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52105": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52735": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "52750": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52755": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "52765": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 4
  },
  "52841": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "52865": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "52866": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "52867": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "52868": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "52870": {
    "Packing box name": 18,
    "Packing case quantity": 3
  },
  "52871": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "52872": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "52873": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "52875": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "52876": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "52877": {
    "Packing box name": 18,
    "Packing case quantity": 3
  },
  "52878": {
    "Packing box name": 18,
    "Packing case quantity": 3
  },
  "52880": {
    "Packing box name": 15,
    "Packing case quantity": 4
  },
  "52881": {
    "Packing box name": 15,
    "Packing case quantity": 4
  },
  "52882": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "53013": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53014": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53015": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53025": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53026": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53027": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53033": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53034": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53035": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53047": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53048": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53049": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53060": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53061": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53063": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "53064": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "53084": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53085": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53086": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53087": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53088": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "53090": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53091": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53092": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53093": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "53094": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53104": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53105": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53106": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53110": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53111": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53112": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53123": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53124": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53125": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "53127": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "53133": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "53134": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53136": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53145": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53146": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53151": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "53152": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "53157": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53158": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53159": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53164": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53165": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "53166": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53167": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53172": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53173": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53182": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53183": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53185": {
    "Packing box name": 13,
    "Packing case quantity": 24
  },
  "53186": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53189": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53190": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "53192": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53193": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53195": {
    "Packing box name": 13,
    "Packing case quantity": 24
  },
  "53196": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53197": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53198": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53199": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53202": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "53203": {
    "Packing box name": 15,
    "Packing case quantity": 6
  },
  "53204": {
    "Packing box name": 13,
    "Packing case quantity": 24
  },
  "53206": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "53207": {
    "Packing box name": 15,
    "Packing case quantity": 6
  },
  "53209": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53210": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "53211": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53215": {
    "Packing box name": 13,
    "Packing case quantity": 3
  },
  "53221": {
    "Packing box name": "MIG3",
    "Packing case quantity": 24
  },
  "53222": {
    "Packing box name": "MIG3",
    "Packing case quantity": 24
  },
  "53223": {
    "Packing box name": "MIG3",
    "Packing case quantity": 24
  },
  "53224": {
    "Packing box name": "MIG3",
    "Packing case quantity": 24
  },
  "53225": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "53226": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "53229": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53231": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53233": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53250": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "53251": {
    "Packing box name": 13,
    "Packing case quantity": 24
  },
  "53252": {
    "Packing box name": 13,
    "Packing case quantity": 24
  },
  "53253": {
    "Packing box name": 13,
    "Packing case quantity": 24
  },
  "53255": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "53256": {
    "Packing box name": 13,
    "Packing case quantity": 24
  },
  "53258": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "53265": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53266": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53267": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53269": {
    "Packing box name": 16,
    "Packing case quantity": 6
  },
  "53270": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53272": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "53285": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "53286": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53291": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53297": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53299": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53300": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53310": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53312": {
    "Packing box name": 15,
    "Packing case quantity": 48
  },
  "53317": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53318": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "53319": {
    "Packing box name": 13,
    "Packing case quantity": 48
  },
  "53320": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "53325": {
    "Packing box name": 13,
    "Packing case quantity": 24
  },
  "53328": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "53354": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53355": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "53357": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53406": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "53409": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53410": {
    "Packing box name": "R1",
    "Packing case quantity": 10
  },
  "53411": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "53412": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53413": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53414": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53422": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "53423": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "53425": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "53429": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "53430": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "53432": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "53435": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "53442": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "53443": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "53444": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53447": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "53448": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "53450": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "53483": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "54300": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "54400": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "54405": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "54410": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "54510": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "54705": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "54717": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "54722": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 20
  },
  "54727": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 24
  },
  "54732": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 24
  },
  "54770": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "54772": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "54774": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "54775": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "54785": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "54786": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 6
  },
  "54787": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "54788": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "54810": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54811": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54812": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54813": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54814": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54815": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54816": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54817": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54818": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54819": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "54820": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "54821": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "54823": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "54824": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "54825": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "54826": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "54827": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "55199": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "55200": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "55206": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "55207": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55209": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "55210": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "55212": {
    "Packing box name": "MIG3",
    "Packing case quantity": 3
  },
  "55239": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "55262": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "55263": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "55264": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "55267": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "55268": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "55269": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "55291": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "55294": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55295": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55297": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "55300": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "55301": {
    "Packing box name": 18,
    "Packing case quantity": 12
  },
  "55305": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "55307": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "55309": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55311": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "55312": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55315": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "55320": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "55323": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "55324": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "55327": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "55328": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "55329": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55330": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55337": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55338": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55401": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55402": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55403": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55407": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55428": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "55666": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "55672": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "55673": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "55674": {
    "Packing box name": 13,
    "Packing case quantity": 4
  },
  "55675": {
    "Packing box name": 13,
    "Packing case quantity": 4
  },
  "55703": {
    "Packing box name": 18,
    "Packing case quantity": 6
  },
  "55710": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55731": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 2
  },
  "55732": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55750": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "55752": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "55753": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "55754": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "55755": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "55756": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "55757": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "55758": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "55759": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55760": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55761": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55763": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55764": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55765": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55766": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55767": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55768": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55769": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55770": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "55780": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "55781": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "55782": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "55783": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "55784": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "55785": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "55786": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "55814": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55815": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55816": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55817": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55818": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55819": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55820": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55834": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "55835": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "55843": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "55852": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55853": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55854": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55855": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55856": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "55857": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55858": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55859": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55860": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55861": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55862": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55901": {
    "Packing box name": "R1",
    "Packing case quantity": 6
  },
  "55902": {
    "Packing box name": "R1",
    "Packing case quantity": 6
  },
  "55906": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "55909": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "55935": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55936": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55937": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55938": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55939": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "55971": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "55973": {
    "Packing box name": 13,
    "Packing case quantity": 5
  },
  "55975": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "55984": {
    "Packing box name": 15,
    "Packing case quantity": 6
  },
  "56000": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "56200": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "56205": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "56800": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "56801": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "56802": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "56804": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "56807": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "56810": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "56812": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "56900": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "56901": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57005": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57008": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57009": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57010": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57011": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57012": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57050": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57051": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57052": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57053": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57054": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57055": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57056": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57060": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57061": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57070": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57071": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57151": {
    "Packing box name": 13,
    "Packing case quantity": 5
  },
  "57152": {
    "Packing box name": 15,
    "Packing case quantity": 3
  },
  "57200": {
    "Packing box name": "MIG3",
    "Packing case quantity": 1
  },
  "57201": {
    "Packing box name": "MIG3",
    "Packing case quantity": 1
  },
  "57202": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "57203": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "57214": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "57216": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "57300": {
    "Packing box name": "F1",
    "Packing case quantity": 3
  },
  "57301": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "57510": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "57511": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "57601": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "57602": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "57637": {
    "Packing box name": "F1",
    "Packing case quantity": 4
  },
  "57645": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57646": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57647": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57648": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57649": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57650": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57651": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57652": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57653": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57654": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57655": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57656": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57657": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57658": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57659": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57660": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "57661": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57662": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57663": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57664": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57665": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57666": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "57667": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "57668": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "57701": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "57702": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "57705": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "57710": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "57715": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "57901": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "57902": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "57903": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "57904": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "58400": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "58401": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "58402": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "58499": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "58600": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "58601": {
    "Packing box name": 13,
    "Packing case quantity": 4
  },
  "58602": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "58603": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "58604": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "58605": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "58606": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "58608": {
    "Packing box name": 13,
    "Packing case quantity": 4
  },
  "58609": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "58610": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "58621": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "59020": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "59021": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "60001": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60002": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60003": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60004": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60005": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60006": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60013": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60014": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60015": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60016": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60017": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60025": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60026": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60027": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60028": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60029": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60030": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60031": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60032": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60033": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60034": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60035": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60036": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60050": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60051": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60052": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60053": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60054": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60055": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60065": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60066": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60067": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60068": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60069": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60070": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60071": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60072": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60073": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60074": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60075": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60076": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60090": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60091": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60092": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60093": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60094": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60095": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60096": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60097": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60098": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60099": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60100": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60101": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60102": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60103": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60104": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60105": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60106": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60107": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60108": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60109": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60110": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60111": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60112": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60113": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60120": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60121": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60122": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60123": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60124": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60125": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60126": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60127": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60135": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60136": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60137": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60138": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60139": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60140": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60156": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "60157": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "60160": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60161": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60164": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60165": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60166": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60167": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "60170": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60171": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60172": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60173": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60175": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60176": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60177": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60178": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60179": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60181": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "60182": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "60183": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "60184": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60185": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60186": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60187": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60188": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60189": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60190": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60191": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60192": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60201": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60202": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60203": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60204": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60205": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60206": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60207": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60208": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60209": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60211": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60212": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60213": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60214": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60215": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60216": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60217": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60218": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60219": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60220": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60221": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60222": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60223": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60224": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60225": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60226": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60228": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60230": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60231": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60232": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60233": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60234": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60235": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60237": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60238": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60239": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60241": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60244": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60245": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60246": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60247": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60248": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60249": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "60250": {
    "Packing box name": 8,
    "Packing case quantity": 24
  },
  "60252": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60253": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60256": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60259": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60261": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60262": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60263": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60264": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60265": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "60270": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60271": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60300": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "60301": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "60303": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "60305": {
    "Packing box name": 8,
    "Packing case quantity": 36
  },
  "60306": {
    "Packing box name": 8,
    "Packing case quantity": 36
  },
  "60310": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "60312": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "60313": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "60314": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "60315": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "60325": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60326": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60330": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60331": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60332": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "60343": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60344": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60345": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60346": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60347": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60348": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60402": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60403": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60406": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60407": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60408": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60409": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60412": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60413": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60426": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60427": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60428": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60429": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60430": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60433": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60434": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60435": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60445": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60446": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60447": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60448": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60449": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60450": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60461": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60462": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60463": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60464": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60465": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60471": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60472": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60473": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60482": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60483": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60484": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60505": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60506": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60507": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60515": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60516": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "60517": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61010": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61011": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61012": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61013": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61014": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61015": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61016": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61019": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61020": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61021": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61022": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61023": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61024": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61025": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61029": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61030": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61031": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61032": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61033": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61034": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61035": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61036": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61037": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61038": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61039": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61040": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61041": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61042": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61043": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61044": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61046": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61047": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61050": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61051": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61052": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61054": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61060": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61061": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61062": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61063": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61064": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61070": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61071": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61072": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61073": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61074": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61080": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61081": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61082": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61083": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61084": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61085": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61086": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61087": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61090": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61091": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61092": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61093": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61095": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61110": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61111": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61112": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61113": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61120": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61121": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61122": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61123": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61125": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61130": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61131": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61132": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61140": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61141": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61142": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61143": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61150": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61151": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61152": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61153": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "61160": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61161": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61162": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61163": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61164": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61165": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61170": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61171": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61172": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61173": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61174": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61175": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61254": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61255": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61264": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61287": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61288": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61289": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61290": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61293": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61302": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61303": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61304": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61305": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61306": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61321": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61322": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "61323": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "61324": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "61325": {
    "Packing box name": "3 ft",
    "Packing case quantity": 2
  },
  "61326": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "61330": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61332": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61334": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61340": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61345": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61352": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61353": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61357": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61360": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61363": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61365": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61369": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61373": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61378": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61381": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61383": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "61385": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61386": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61388": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61389": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "61400": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61401": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61402": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61403": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61404": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61405": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61406": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61407": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61409": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61412": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61419": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61421": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61422": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61423": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61425": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61426": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61427": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61428": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61429": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61430": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61435": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61437": {
    "Packing box name": "R1",
    "Packing case quantity": 12
  },
  "61438": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61440": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61441": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61444": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61445": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61447": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61449": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61450": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61452": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61454": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61455": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61456": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61458": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61459": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61460": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61461": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "61463": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "61464": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "61466": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61467": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "61468": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61470": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61472": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61473": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61474": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61475": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61476": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61477": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61478": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61479": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61480": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61481": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61482": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61483": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61484": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61485": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61486": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61489": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61490": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61499": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "61503": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "61508": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "61509": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "61510": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "61511": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61512": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "61513": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61514": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61515": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61516": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61517": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61518": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61519": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61520": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61521": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61522": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61523": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61528": {
    "Packing box name": 13,
    "Packing case quantity": 4
  },
  "61529": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "61530": {
    "Packing box name": 13,
    "Packing case quantity": 3
  },
  "61532": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61533": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61534": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61535": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61536": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61537": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61538": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "61539": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "61543": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "61545": {
    "Packing box name": 15,
    "Packing case quantity": 6
  },
  "62001": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62002": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62003": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62004": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62005": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62006": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62007": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62008": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62009": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62010": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62012": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62013": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62014": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62015": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62016": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62017": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62018": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62019": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62020": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62025": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62026": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62027": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62028": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62029": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62031": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62038": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62039": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62040": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62042": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62043": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62050": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62053": {
    "Packing box name": 18,
    "Packing case quantity": 10
  },
  "62054": {
    "Packing box name": 18,
    "Packing case quantity": 10
  },
  "62055": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62056": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62057": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62058": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62059": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62060": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62061": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62062": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62063": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62064": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62065": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62066": {
    "Packing box name": "R1",
    "Packing case quantity": 10
  },
  "62067": {
    "Packing box name": "R1",
    "Packing case quantity": 10
  },
  "62068": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62069": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62070": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62071": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62077": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62078": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62079": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62080": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62081": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "62082": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "62086": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "62089": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "62090": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "62096": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "62097": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "62098": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62104": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62105": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62106": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62107": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62109": {
    "Packing box name": 18,
    "Packing case quantity": 10
  },
  "62113": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "62115": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "62117": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "62120": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62121": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "62122": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "62143": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "62144": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "62145": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "62146": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "62147": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "62148": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "62149": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "70201": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70202": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70215": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70216": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70217": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70221": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "70225": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70226": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70227": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70228": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70229": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70301": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70305": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70307": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70320": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70321": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70322": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70323": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70324": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70325": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70326": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70327": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70328": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70330": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70331": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70332": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70334": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70335": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70340": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70341": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70342": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70343": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70397": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 2
  },
  "70398": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 2
  },
  "70399": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70400": {
    "Packing box name": "Barrel",
    "Packing case quantity": 1
  },
  "70401": {
    "Packing box name": "Barrel",
    "Packing case quantity": 1
  },
  "70402": {
    "Packing box name": "Barrel",
    "Packing case quantity": 1
  },
  "70403": {
    "Packing box name": "Bucket",
    "Packing case quantity": 1
  },
  "70404": {
    "Packing box name": "Bucket",
    "Packing case quantity": 1
  },
  "70407": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70408": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "70409": {
    "Packing box name": "1W",
    "Packing case quantity": 2
  },
  "70410": {
    "Packing box name": "Bucket",
    "Packing case quantity": 1
  },
  "70411": {
    "Packing box name": "Bucket",
    "Packing case quantity": 1
  },
  "70412": {
    "Packing box name": "Bucket",
    "Packing case quantity": 1
  },
  "70413": {
    "Packing box name": "Bucket",
    "Packing case quantity": 1
  },
  "70420": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70421": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70425": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70426": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70445": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70446": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70447": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70448": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70450": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70451": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70452": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70453": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70460": {
    "Packing box name": 13,
    "Packing case quantity": 5
  },
  "70465": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "70467": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "70469": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70470": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70471": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70472": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70473": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70474": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70475": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70476": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70483": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70484": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70485": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70487": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "70488": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70489": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70490": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70491": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70500": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70501": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70503": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70504": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70505": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70506": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70508": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70511": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70512": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70516": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70518": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70519": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70520": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70521": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70522": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70523": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70525": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70526": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70527": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70528": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70529": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70530": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70531": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70600": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70601": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70610": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "70620": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "70622": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "70624": {
    "Packing box name": 15,
    "Packing case quantity": 1
  },
  "70691": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "70692": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "70693": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "70694": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "70695": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "70710": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70714": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70715": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70716": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "70717": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "70718": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70720": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "70730": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70731": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70733": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70734": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70735": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70736": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70738": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70739": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70740": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70741": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70742": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70743": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70752": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70754": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "70755": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70756": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70757": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70758": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70762": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70763": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70767": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70770": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70771": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70776": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70794": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70795": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70801": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "70802": {
    "Packing box name": "F1",
    "Packing case quantity": 24
  },
  "70803": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "70804": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70805": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70806": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "70807": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70815": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70816": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "70817": {
    "Packing box name": 15,
    "Packing case quantity": 1
  },
  "70818": {
    "Packing box name": 8,
    "Packing case quantity": 24
  },
  "70819": {
    "Packing box name": 8,
    "Packing case quantity": 24
  },
  "70820": {
    "Packing box name": 8,
    "Packing case quantity": 24
  },
  "70821": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70822": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70823": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70824": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70825": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70827": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "70828": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70829": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70830": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70831": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70832": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70833": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70834": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70835": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70840": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70841": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70842": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70845": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70846": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70847": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70852": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70853": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70854": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70855": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70856": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70857": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70858": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70860": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70861": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70862": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70863": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70864": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70865": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70875": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70876": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70877": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70878": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70886": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70890": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70891": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70893": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70894": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70895": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70896": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70897": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70898": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70901": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70902": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70903": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70905": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70908": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70912": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70915": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70917": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70940": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70941": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70946": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70947": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70948": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70951": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70952": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70955": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70956": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "70960": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "70962": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71217": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71218": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "71219": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "71510": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "71556": {
    "Packing box name": "F1",
    "Packing case quantity": 4
  },
  "71557": {
    "Packing box name": "F1",
    "Packing case quantity": 4
  },
  "71558": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "71559": {
    "Packing box name": 15,
    "Packing case quantity": 4
  },
  "71560": {
    "Packing box name": "F1",
    "Packing case quantity": 4
  },
  "71561": {
    "Packing box name": "F1",
    "Packing case quantity": 4
  },
  "71562": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "71563": {
    "Packing box name": "F1",
    "Packing case quantity": 4
  },
  "71564": {
    "Packing box name": "F1",
    "Packing case quantity": 4
  },
  "71565": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "71566": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "71568": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "71582": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71601": {
    "Packing box name": "R1",
    "Packing case quantity": 16
  },
  "71602": {
    "Packing box name": "R1",
    "Packing case quantity": 16
  },
  "71603": {
    "Packing box name": "R1",
    "Packing case quantity": 8
  },
  "71604": {
    "Packing box name": "R1",
    "Packing case quantity": 8
  },
  "71605": {
    "Packing box name": "R1",
    "Packing case quantity": 16
  },
  "71606": {
    "Packing box name": "R1",
    "Packing case quantity": 16
  },
  "71607": {
    "Packing box name": "R1",
    "Packing case quantity": 8
  },
  "71608": {
    "Packing box name": "R1",
    "Packing case quantity": 8
  },
  "71609": {
    "Packing box name": "R1",
    "Packing case quantity": 16
  },
  "71610": {
    "Packing box name": "R1",
    "Packing case quantity": 8
  },
  "71611": {
    "Packing box name": "R1",
    "Packing case quantity": 8
  },
  "71612": {
    "Packing box name": "R1",
    "Packing case quantity": 16
  },
  "71613": {
    "Packing box name": "R1",
    "Packing case quantity": 16
  },
  "71614": {
    "Packing box name": "R1",
    "Packing case quantity": 16
  },
  "71615": {
    "Packing box name": "R1",
    "Packing case quantity": 8
  },
  "71616": {
    "Packing box name": "R1",
    "Packing case quantity": 8
  },
  "71637": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "71638": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "71639": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "71642": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71643": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71644": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71645": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71647": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71648": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71649": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71650": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71652": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "71653": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "71654": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "71655": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "71656": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "71657": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "71659": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71660": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71661": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71662": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71663": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71664": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71666": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71667": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71668": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71669": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71670": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71671": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71685": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71686": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71687": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71688": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71689": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71690": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71691": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71692": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71693": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71694": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71695": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71696": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71697": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "71725": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71726": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71727": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71728": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71743": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71745": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71746": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71748": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71772": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "71774": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "71775": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "71779": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "71781": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "71782": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "71783": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "71786": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "71788": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "71791": {
    "Packing box name": 8,
    "Packing case quantity": 30
  },
  "71792": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71793": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "71797": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71798": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "71799": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71800": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "71801": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "71802": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71803": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71804": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71805": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71806": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71807": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "71814": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "71815": {
    "Packing box name": "F1",
    "Packing case quantity": 100
  },
  "71818": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71819": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71825": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71826": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71827": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "71833": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "71834": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71836": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71840": {
    "Packing box name": "F1",
    "Packing case quantity": 100
  },
  "71841": {
    "Packing box name": "F1",
    "Packing case quantity": 100
  },
  "71842": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 100
  },
  "71843": {
    "Packing box name": 8,
    "Packing case quantity": 100
  },
  "71844": {
    "Packing box name": "F1",
    "Packing case quantity": 100
  },
  "71845": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 100
  },
  "71846": {
    "Packing box name": "F1",
    "Packing case quantity": 100
  },
  "71847": {
    "Packing box name": "F1",
    "Packing case quantity": 100
  },
  "71848": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71849": {
    "Packing box name": "F1",
    "Packing case quantity": 20
  },
  "71850": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71851": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71852": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71854": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71855": {
    "Packing box name": 8,
    "Packing case quantity": 100
  },
  "71856": {
    "Packing box name": "F1",
    "Packing case quantity": 100
  },
  "71857": {
    "Packing box name": 8,
    "Packing case quantity": 100
  },
  "71860": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "71864": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "71865": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "71866": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "71872": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "71874": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "71875": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71876": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71877": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71878": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71879": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71882": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71883": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71885": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71886": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71888": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71889": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "71890": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71892": {
    "Packing box name": "MIG3",
    "Packing case quantity": 20
  },
  "71893": {
    "Packing box name": "MIG3",
    "Packing case quantity": 20
  },
  "71894": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 20
  },
  "71895": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 20
  },
  "71896": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71897": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "71898": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71899": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71900": {
    "Packing box name": "MIG3",
    "Packing case quantity": 1
  },
  "71909": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71910": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71911": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71912": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71914": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71915": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71916": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71917": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71918": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "71919": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "71920": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71921": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71922": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71923": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "71924": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "71925": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "71926": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71927": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71928": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71929": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71930": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71931": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71932": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71933": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71935": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "71936": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "71938": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71939": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "71940": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71941": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71942": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71945": {
    "Packing box name": 13,
    "Packing case quantity": 20
  },
  "71946": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "71952": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71954": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71978": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71979": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71981": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71983": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "71985": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71986": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71987": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71988": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71991": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71992": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "71993": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72006": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "72040": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72100": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "72111": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72234": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72235": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72240": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72251": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72252": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72253": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72254": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72255": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72257": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72265": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72266": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72267": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "72268": {
    "Packing box name": "F1",
    "Packing case quantity": 24
  },
  "72269": {
    "Packing box name": "R1",
    "Packing case quantity": 24
  },
  "72270": {
    "Packing box name": "R1",
    "Packing case quantity": 24
  },
  "72295": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72296": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72297": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72299": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72300": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72302": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72306": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "72307": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "72308": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "72309": {
    "Packing box name": "F1",
    "Packing case quantity": 25
  },
  "72310": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "72314": {
    "Packing box name": "MIG3",
    "Packing case quantity": 25
  },
  "72316": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "72318": {
    "Packing box name": "MIG3",
    "Packing case quantity": 25
  },
  "72321": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72322": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72323": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72324": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72351": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72352": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72353": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72354": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72355": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72356": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72357": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72358": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72360": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72374": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72375": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "72379": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72385": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72386": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72390": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72391": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72395": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72396": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72397": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72398": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72400": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72401": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72402": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72403": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72404": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72405": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 5
  },
  "72406": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72407": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72408": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72412": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72413": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72414": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72415": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72416": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72417": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72435": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72445": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "72446": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "72448": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "72454": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "72461": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72463": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72464": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72465": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72466": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72467": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72468": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72469": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72470": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72471": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72472": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72482": {
    "Packing box name": "MIG3",
    "Packing case quantity": 1
  },
  "72485": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72486": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72488": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72489": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72490": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72491": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72492": {
    "Packing box name": 8,
    "Packing case quantity": 21
  },
  "72493": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72494": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72495": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72496": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72507": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72508": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72509": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72510": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72511": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72513": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72515": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72518": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72519": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72521": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72522": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72524": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72525": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72526": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72527": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72528": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72529": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72530": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72531": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72532": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72534": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72535": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72536": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72537": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72539": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72540": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72541": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72542": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72543": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72544": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72545": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72547": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72548": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72549": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72550": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72552": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72553": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72554": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72555": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72556": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72557": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72559": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72560": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72561": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72563": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72564": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72565": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72567": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72568": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72569": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72570": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72572": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72574": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72575": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72576": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72578": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72579": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72580": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72581": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72582": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72584": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72585": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72586": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72588": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72589": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72590": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72591": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72592": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72593": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72594": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72595": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72596": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72597": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72599": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72600": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72601": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72602": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72604": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72605": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72606": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72607": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72608": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72609": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72610": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72611": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72613": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72614": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72616": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72617": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72619": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72620": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72621": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72622": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72623": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72624": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72625": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72626": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72627": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72628": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72629": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72630": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72631": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72632": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72633": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72634": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72635": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72636": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72638": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72639": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72640": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72641": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72642": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72643": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72644": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72646": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72647": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72649": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72650": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72651": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72652": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72653": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72654": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72655": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72656": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72657": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72658": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72659": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72660": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72661": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72662": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72663": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72664": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72665": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72666": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72667": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72669": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72725": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72726": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72727": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72728": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72729": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72730": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72731": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72732": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72733": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72734": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72735": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72736": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72737": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72738": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72739": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72740": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72741": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72742": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72743": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72744": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72745": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72746": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72747": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72748": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72749": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72750": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72751": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72752": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72753": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "72754": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "72755": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "72756": {
    "Packing box name": 15,
    "Packing case quantity": 5
  },
  "72757": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "72758": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72759": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "72760": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72761": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72762": {
    "Packing box name": 13,
    "Packing case quantity": 5
  },
  "72780": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72782": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72784": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72788": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72790": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72791": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "72792": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72793": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72795": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72796": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72797": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72798": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "72801": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72802": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72803": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72804": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72805": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72806": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72807": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72808": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "72812": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72816": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72818": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72819": {
    "Packing box name": "F1",
    "Packing case quantity": 5
  },
  "72823": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "72826": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72830": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72832": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72835": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72838": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72840": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72841": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72847": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "72849": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72851": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "72855": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72856": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72857": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72860": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "72867": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72868": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72869": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72871": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "72874": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72881": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72882": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72885": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72887": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72891": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "72892": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72895": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "72896": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "72897": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "73000": {
    "Packing box name": 15,
    "Packing case quantity": 6
  },
  "73148": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75100": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "75101": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "75102": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "75103": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "75106": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75107": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75108": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75109": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75114": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75115": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75116": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75117": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75118": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75123": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75126": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75127": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75128": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75129": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75134": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75135": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75136": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75137": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75140": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75141": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75142": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75148": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75149": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75150": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75153": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75154": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75155": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75156": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75157": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75158": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75159": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75160": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "75161": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "75162": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75166": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "75167": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "75168": {
    "Packing box name": "3 ft",
    "Packing case quantity": 4
  },
  "75169": {
    "Packing box name": "3 ft",
    "Packing case quantity": 4
  },
  "75170": {
    "Packing box name": "3 ft",
    "Packing case quantity": 4
  },
  "75171": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "75172": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75173": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "75176": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75180": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "75181": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "75182": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "75183": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "75184": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "75185": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75186": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75190": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "75191": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "75192": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "75193": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75194": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "75195": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75196": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75203": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "75204": {
    "Packing box name": 13,
    "Packing case quantity": 6
  },
  "75215": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75217": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75220": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75222": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75224": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75226": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75228": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75230": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75234": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75236": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75238": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75240": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75242": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75244": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75246": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75247": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75248": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75250": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75252": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75254": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75260": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75303": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75304": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75305": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75306": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75307": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75309": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75315": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75316": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75317": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75318": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75319": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75320": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "75321": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "75322": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75323": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75324": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75325": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75326": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75330": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "75331": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "75332": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75334": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75336": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "75337": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 10
  },
  "75340": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75344": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75345": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75346": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75347": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75348": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75349": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "75350": {
    "Packing box name": 15,
    "Packing case quantity": 10
  },
  "75352": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75353": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75354": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75355": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75356": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75357": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75358": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75359": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75360": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75361": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75362": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75363": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75364": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75365": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "75366": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75367": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75368": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75370": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75380": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75381": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75385": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "75398": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75399": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75401": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75406": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75407": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75408": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75409": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75410": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75411": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75414": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "75415": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "75417": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "75418": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "75425": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75430": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75431": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75435": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75436": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "75437": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75438": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "75442": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "75443": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "75444": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "75445": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "75447": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75448": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75450": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "75471": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75472": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75473": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75474": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75475": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75476": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75479": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75480": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75482": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75483": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75484": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75485": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75487": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "75488": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75489": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75491": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75492": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75493": {
    "Packing box name": "MIG3",
    "Packing case quantity": 4
  },
  "75494": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "75495": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75496": {
    "Packing box name": 13,
    "Packing case quantity": 5
  },
  "75498": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75499": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75500": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "75501": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75503": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75509": {
    "Packing box name": "MIG3",
    "Packing case quantity": 5
  },
  "75519": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75520": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75521": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75522": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75524": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75525": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75526": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75527": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75528": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "75529": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "75530": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75532": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75533": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75534": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75535": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75536": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75537": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75540": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75541": {
    "Packing box name": 13,
    "Packing case quantity": 12
  },
  "75542": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "75543": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75545": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "75546": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "75547": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "75549": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75550": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "75551": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "75552": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75553": {
    "Packing box name": "MIG3",
    "Packing case quantity": 12
  },
  "75554": {
    "Packing box name": 13,
    "Packing case quantity": 10
  },
  "75555": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75556": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75558": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75559": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75560": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "75561": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "75562": {
    "Packing box name": "F1",
    "Packing case quantity": 12
  },
  "75565": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "75570": {
    "Packing box name": "MIG3",
    "Packing case quantity": 6
  },
  "75575": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75576": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75577": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75578": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75579": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75580": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "75581": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "75582": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "75583": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "75590": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75592": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75600": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "75602": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "78005": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "78038": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "84002": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "84094": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "85263": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "85264": {
    "Packing box name": 15,
    "Packing case quantity": 2
  },
  "85316": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "85317": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "85319": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85330": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85333": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85334": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85335": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85336": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85337": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85338": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85339": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85340": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85341": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85342": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "85346": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85347": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85348": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85349": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "85350": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85351": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85354": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85355": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85359": {
    "Packing box name": 8,
    "Packing case quantity": 3
  },
  "85362": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "85363": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "85364": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "85370": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "85371": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "85376": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "85392": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "85393": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "85394": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "85414": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "85450": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "85454": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "85492": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "85651": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "85653": {
    "Packing box name": "Helmet MC",
    "Packing case quantity": 3
  },
  "85654": {
    "Packing box name": 15,
    "Packing case quantity": 1
  },
  "85655": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "85657": {
    "Packing box name": 15,
    "Packing case quantity": 1
  },
  "85658": {
    "Packing box name": 18,
    "Packing case quantity": 1
  },
  "85659": {
    "Packing box name": 15,
    "Packing case quantity": 1
  },
  "85662": {
    "Packing box name": 13,
    "Packing case quantity": 3
  },
  "85663": {
    "Packing box name": 15,
    "Packing case quantity": 1
  },
  "85665": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "85669": {
    "Packing box name": "MIG3",
    "Packing case quantity": 1
  },
  "85670": {
    "Packing box name": "MIG3",
    "Packing case quantity": 1
  },
  "85674": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85675": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85676": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "85677": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "85678": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "85679": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "85681": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "85682": {
    "Packing box name": "R1",
    "Packing case quantity": 5
  },
  "85683": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "85684": {
    "Packing box name": 8,
    "Packing case quantity": 4
  },
  "85685": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "85686": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "85688": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "85755": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "85801": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "86102": {
    "Packing box name": "F1",
    "Packing case quantity": 25
  },
  "86103": {
    "Packing box name": "F1",
    "Packing case quantity": 25
  },
  "86104": {
    "Packing box name": 8,
    "Packing case quantity": 24
  },
  "86105": {
    "Packing box name": 13,
    "Packing case quantity": 4
  },
  "86109": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "86111": {
    "Packing box name": "MIG3",
    "Packing case quantity": 10
  },
  "86113": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "86116": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "86119": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "86120": {
    "Packing box name": 8,
    "Packing case quantity": 20
  },
  "86122": {
    "Packing box name": 8,
    "Packing case quantity": 25
  },
  "86124": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86125": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86126": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86127": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86128": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86129": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86130": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86131": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86135": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86136": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86137": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "86138": {
    "Packing box name": 8,
    "Packing case quantity": 10
  },
  "86140": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "86141": {
    "Packing box name": "F1",
    "Packing case quantity": 10
  },
  "86143": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "86144": {
    "Packing box name": 8,
    "Packing case quantity": 12
  },
  "86145": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "86146": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "86147": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "86150": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "86151": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "86152": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "86164": {
    "Packing box name": 15,
    "Packing case quantity": 4
  },
  "86165": {
    "Packing box name": 18,
    "Packing case quantity": 4
  },
  "86221": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "86224": {
    "Packing box name": 18,
    "Packing case quantity": 2
  },
  "86228": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "86229": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "86230": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "86231": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "86880": {
    "Packing box name": 8,
    "Packing case quantity": 5
  },
  "87070": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "87071": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "87090": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "87091": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "87092": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "87093": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "87100": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 2
  },
  "87101": {
    "Packing box name": 13,
    "Packing case quantity": 2
  },
  "87102": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "87104": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "87131": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "87200": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "87201": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "87202": {
    "Packing box name": "F1",
    "Packing case quantity": 2
  },
  "87220": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87727": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87728": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87729": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87730": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87731": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87732": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87733": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87734": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87735": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87736": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87790": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "87791": {
    "Packing box name": "MIG3",
    "Packing case quantity": 2
  },
  "87795": {
    "Packing box name": 8,
    "Packing case quantity": 6
  },
  "87798": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87799": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87800": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87801": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87802": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87803": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87804": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87805": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87806": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87807": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87808": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87809": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87810": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87811": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87812": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87813": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "87821": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "87822": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "87823": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "87824": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "87826": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "87831": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "87832": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "87833": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "87834": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "87835": {
    "Packing box name": "F1",
    "Packing case quantity": 6
  },
  "88061": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "88062": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "88063": {
    "Packing box name": 8,
    "Packing case quantity": 2
  },
  "88064": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "88066": {
    "Packing box name": "R1",
    "Packing case quantity": 2
  },
  "88067": {
    "Packing box name": "R1",
    "Packing case quantity": 2
  },
  "93097": {
    "Packing box name": 15,
    "Packing case quantity": 6
  },
  "99887": {
    "Packing box name": "Flat 13",
    "Packing case quantity": 1
  },
  "99889": {
    "Packing box name": "Flat 13",
    "Packing case quantity": 1
  },
  "120036": {
    "Packing box name": 8,
    "Packing case quantity": 1
  },
  "400000": {
    "Packing box name": "Supplier (As-Is)",
    "Packing case quantity": 1
  },
  "70504A": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "70511A": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "70512A": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "70518A": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "70521A": {
    "Packing box name": 15,
    "Packing case quantity": 12
  },
  "P-10915": {
    "Packing box name": 13,
    "Packing case quantity": 1
  },
  "84x8": {
    "Packing box name": "Flat 13",
    "Packing case quantity": 1
  },
  "60x4": {
    "Packing box name": "Flat 13",
    "Packing case quantity": 1
  },
  "60x8": {
    "Packing box name": "Flat 13",
    "Packing case quantity": 1
  },
  "60x12": {
    "Packing box name": "Flat 13",
    "Packing case quantity": 1
  },
  "84x4": {
    "Packing box name": "Flat 13",
    "Packing case quantity": 1
  },
  "84x12": {
    "Packing box name": "Flat F1",
    "Packing case quantity": 1
  },
  "Welding Tree": {
    "Packing box name": "F1",
    "Packing case quantity": 1
  },
  "Welders 60x4": {
    "Packing box name": "R1",
    "Packing case quantity": 1
  }
}

//// Style values:::
var globalStyle={
  "fontSize": "clamp(12px, 4vw, 40px"
}
///// State Functions::::
const divRef = createRef()
const dimensions = useRefDimensions(divRef)
const [inputValue, setInputValue] = useState("");
const [result, setResult] = useState("");

  /// Handle updating the input values::::
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  /// Handle keyboard events Function::::
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      
      if (cvsObj[inputValue]) {
        setResult(<div>
          <p style={{display: "flex", fontSize: globalStyle["fontSize"]}}><div style={{fontWeight: "bold", marginRight: 10}}>Item Number:</div> <div>{inputValue}</div></p>
          <p style={{display: "flex", fontSize: globalStyle["fontSize"]}}><div style={{fontWeight: "bold", marginRight: 10}}>Packing Box Name: </div> <div>{cvsObj[inputValue]["Packing box name"]}</div></p>
          <p style={{display: "flex", fontSize: globalStyle["fontSize"]}}><div style={{fontWeight: "bold", marginRight: 10}}>Packing Case Quantity:</div> <div>{cvsObj[inputValue]["Packing case quantity"]}</div></p>
        </div>)
        setInputValue("")
      } else {
        setResult(<p style={{display: "flex", fontSize: globalStyle["fontSize"], color: "red"}}>
          <span style={{fontWeight: "bold", marginRight: 10, color: "red"}}>⚠️</span>Item Not In Catalog <span style={{fontWeight: "bold", marginLeft: 10, color: "red"}}>⚠️</span></p>
        )
        setInputValue("")

      }
    }
  };

  ////Log the current Input width:::
  console.log(dimensions.width)

  /// Render ::::
  return (
    <div style={{ position: "fixed",
                  top: (window.innerHeight/2)-100,
                  left: (window.innerWidth/2)-(dimensions.width/2),
                 }}>
      <input
        type="text"
        id="myDiv"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter Item Number"
        onFocus={(e) => e.target.placeholder = ""} 
        onBlur={(e) => e.target.placeholder = "Enter Item Number"}
        ref={divRef}         
        style={{fontWeight: "bold", fontSize: globalStyle["fontSize"], border: "3px solid black"
      }}
      />
      <p>{result}</p>
     
    </div>
  );
};
  


export default App;



