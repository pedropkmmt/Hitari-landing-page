import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InspectionTower() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(6.2, 4.6, 8.4);
    camera.lookAt(0, 2.4, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const slabMat = new THREE.LineBasicMaterial({
      color: 0x3b4657,
      transparent: true,
      opacity: 0.9,
    });
    const floors = 9;
    const floorH = 0.62;
    const nodePositions = [];

    for (let i = 0; i < floors; i++) {

      const w = i < 3 ? 3.0 : i < 6 ? 2.4 : 1.8;
      const d = i < 3 ? 2.2 : i < 6 ? 1.8 : 1.4;
      const geo = new THREE.BoxGeometry(w, floorH, d);
      const edges = new THREE.EdgesGeometry(geo);
      const lines = new THREE.LineSegments(edges, slabMat.clone());
      lines.position.y = i * floorH + floorH / 2;
      group.add(lines);

      const y = i * floorH + floorH;
      [
        [-w / 2, y, -d / 2],
        [w / 2, y, -d / 2],
        [-w / 2, y, d / 2],
        [w / 2, y, d / 2],
      ].forEach((p) => nodePositions.push(p));
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(nodePositions.flat(), 3)
    );
    const nodeMat = new THREE.PointsMaterial({
      color: 0xcca030,
      size: 0.09,
      transparent: true,
      opacity: 0.35,
    });
    group.add(new THREE.Points(nodeGeo, nodeMat));

    const ringGeo = new THREE.RingGeometry(2.35, 2.42, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xcca030,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    group.add(ring);

    scene.add(new THREE.GridHelper(14, 20, 0x2a3342, 0x1b2230));

    let frame = 0;
    let raf;
    const towerTop = floors * floorH;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      frame += 1;

      if (!prefersReduced) {
        group.rotation.y += 0.0028;
        const t = (Math.sin(frame * 0.012) + 1) / 2; // 0..1 oscillation
        ring.position.y = 0.2 + t * (towerTop - 0.2);
        ringMat.opacity = 0.6 + 0.3 * Math.sin(frame * 0.05);
      } else {
        ring.position.y = towerTop * 0.55;
      }

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" aria-hidden="true" />;
}
