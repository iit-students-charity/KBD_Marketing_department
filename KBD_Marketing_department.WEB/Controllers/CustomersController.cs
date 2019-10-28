﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KBD_Marketing_department.WEB.Models;
using KBD_Marketing_department.WEB.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KBD_Marketing_department.WEB.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly CustomerService customerService;

        public CustomersController(CustomerService customerService)
        {
            this.customerService = customerService;
        }

        [HttpGet]
        public async Task<ICollection<Customer>> GetAllCustomers()
        {
            return await customerService.GetAllCustomers();
        }

        [HttpPost]
        public async Task<CustomerCreate> CreateCustomer([FromBody] CustomerCreate customer)
        {
            return await customerService.CreateCustomer(customer);
        }

        [HttpDelete]
        public async Task DeleteCustomer([FromQuery] int documentNumber)
        {
            //await customerService.DeleteCustomer(documentNumber);
        }

        [HttpGet]
        [Route("banks")]
        public async Task<ICollection<Bank>> GetAllBanks()
        {
            return await customerService.GetAllBanks();
        }
    }
}