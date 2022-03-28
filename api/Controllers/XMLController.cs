using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Diagnostics;
using System.Xml;
using SampleFS.Models;

namespace SampleFS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class XmlHandler : ControllerBase
    {
        private readonly ILogger<XmlHandler> _logger;
        private IWebHostEnvironment Environment;

        public XmlHandler(ILogger<XmlHandler> logger, IWebHostEnvironment environment)
        {
            _logger = logger;
            Environment = environment;
        }

        [HttpGet]
        public IActionResult Get()
        {
            //DataTable table = new DataTable();
            DataSet dataSet = new DataSet();
            List<Department> departments = new List<Department>();

            XmlDocument XmlDoc = new XmlDocument();
            XmlDoc.Load("D:/Meu_Drive/Documentos/Coding/Samples/asp.net_react_ts_postgresql/api/Departments.xml");
            XmlReader xmlReader = new XmlNodeReader(XmlDoc);

            foreach (XmlNode node in XmlDoc.SelectNodes("/Departments/Department"))
            {

                departments.Add(new Department
                {
                    DepartmentId = int.Parse(node["Id"].InnerText),
                    DepartmentName = node["Name"].InnerText
                });
            }

            dataSet.ReadXml(xmlReader);

            return new JsonResult(dataSet);
        }
    }
}