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

        [HttpGet("{tab}")]
        public JsonResult Post(string tab)
        {
            DataSet dataSet = new DataSet();
            List<XMLResult> xmlresults = new List<XMLResult>();

            XmlDocument XmlDoc = new XmlDocument();
            XmlDoc.Load("D:/Meu_Drive/Documentos/Coding/Samples/asp.net_react_ts_postgresql/api/ld 69kv esperantina-matia olimpio.xml");

            switch (tab)
            {
                case "locação":
                    //Boolean foo = false; //For Debbug
                    //int i = 0; //For Debbug
                    //int j = 0; //For Debbug
                    foreach (XmlElement nodeNodes in XmlDoc.SelectNodes("/root/table"))
                    {
                        //j++; //For Debbug
                        foreach (XmlAttribute attr in nodeNodes.Attributes)
                        {
                            //i++; //For Debbug
                            if (nodeNodes.GetAttribute("plsname") == report)
                            {
                                //foo = true; //For Debbug
                                foreach (XmlNode node in nodeNodes)
                                {
                                    xmlresults.Add(new XMLResult
                                    {
                                    StructureNumber = int.Parse(node["struct_number"].InnerText),
                                    AheadSpan = node["ahead_span"].InnerText,
                                    StructureDescription = node["structure_description"].InnerText
                                    });
                                }
                            }
                        }
                    }
                    return new JsonResult(xmlresults);
                    break;
                case "":
                    return new JsonResult("Consulta inválida");
                    break;
            }
        }
    }
}