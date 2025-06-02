import React from 'react';

function Header() {
  return (
    <header className="bg-[#800000] text-[#d4af37] shadow-lg p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="मधुसूदन सेवा सदन"
          className="h-10 w-10 rounded-full shadow-md"
        />
        <h1 className="text-xl font-bold tracking-wider">मधुसूदन सेवा सदन</h1>
      </div>
    </header>
  );
}

export default Header;
