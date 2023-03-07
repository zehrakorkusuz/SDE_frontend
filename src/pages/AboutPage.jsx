import React from "react";

export default function AboutPage() {
  return (
    <div style={{fontSize: '3rem', marginLeft: '5%'}}>
      Docs
      <ul style={{marginLeft: '3%'}}>
        <li>
          <a href="https://blogger-service-7x5inv6roa-lz.a.run.app/docs">
            Blogger Service
          </a>
        </li>
        <li>
          <a href="https://create-content-service-7x5inv6roa-lz.a.run.app/docs">
            Create Content Service
          </a>
        </li>
        <li>
          <a href="https://dalle-service-7x5inv6roa-lz.a.run.app/docs">
            Dall-E Service
          </a>
        </li>
        <li>
          <a href="https://data-service-7x5inv6roa-lz.a.run.app/docs">
            Database Service
          </a>
        </li>
        <li>
          <a href="https://facade-service-7x5inv6roa-lz.a.run.app/docs">
            Facade Service
          </a>
        </li>
        <li>
          <a href="https://storage-service-7x5inv6roa-lz.a.run.app/docs">
            Storage Service
          </a>
        </li>
      </ul>
    </div>
  );
}
