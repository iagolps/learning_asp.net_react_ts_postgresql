using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Xml;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class XmlController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public XmlController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            DataSet dataSet = new DataSet();
            List<XMLResult> xmlresults = new List<XMLResult>();

            XmlDocument XmlDoc = new XmlDocument();
            XmlDoc.Load("D:/Meu_Drive/Documentos/Coding/Samples/asp.net_react_ts_postgresql/api/ld 69kv esperantina-matia olimpio.xml");
            //XmlReader readXml = XmlReader.Create("D:/Meu_Drive/Documentos/Coding/Samples/asp.net_react_ts_postgresql/api/ld 69kv esperantina-matia olimpio.xml");
            
            //readXml.

            foreach (XmlElement nodeTable in XmlDoc.GetElementsByTagName("table"))
            {
               XmlAttributeCollection attr = nodeTable.Attributes; //GetNamedItem("plsname");
               if (attr.Value == "Construction Staking Report")
               {
                   foreach (XmlNode node in nodeTable.)
                   {

                   }
               }

               foreach (XmlNode node in nodeTable)
                {
                    tag = xmlReader //.GetAttribute("plsname"),
                    //StructureNumber = int.Parse(node["struct_number"].InnerText),
                    //AheadSpan = node["ahead_span"].InnerText
                });
            }

            //dataSet.ReadXml(xmlReader);

            return new JsonResult(xmlresults);
        }
    }
}