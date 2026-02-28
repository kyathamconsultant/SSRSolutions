# Service Image Requirements

Add the following service-specific images to `public/images/` for the Services page scroller:

| Service | Filename | Recommended Content |
|---------|----------|---------------------|
| Software Installation & Configuration | `service-software.jpg` | Developer/technician working on laptop, code editor, software installation screen |
| Troubleshooting & Technical Support | `service-troubleshooting.jpg` | Support agent on call, diagnostic tools, server room, or technician fixing computer |
| Service Patches & System Updates | `service-updates.jpg` | Update notification, system upgrade screen, security warning, or maintenance work |
| System Maintenance & Optimization | `service-maintenance.jpg` | Server maintenance, backup process, monitoring dashboard, or data center |
| Network Setup & Configuration | `service-network.jpg` | Network cables/router, server racks, network diagram, or WiFi setup |
| CCTV Installation & Hardware Support | `service-cctv.jpg` | CCTV cameras, surveillance monitor, installation work, or security system |

## Notes

- All images should be high-resolution (1200px × 900px or larger for best quality)
- Use consistent aspect ratios (4:3 or 16:9 works well)
- Optimize images for web (consider using compression tools or WebP format)
- Images should be professional and match the light theme aesthetic
- Place all files in the `public/images/` directory

## Example File Placement

```
public/
├── images/
│   ├── hero.jpg
│   ├── service-software.jpg
│   ├── service-troubleshooting.jpg
│   ├── service-updates.jpg
│   ├── service-maintenance.jpg
│   ├── service-network.jpg
│   ├── service-cctv.jpg
│   └── services-bg.jpg
```

Once you add the images, they will automatically display on each service section in the scroller.