describe('Thermostat', function() {
  var mrThermo;
  beforeEach(function() {
    mrThermo = new Thermostat;
  });

  describe('defaults and temperature limits', function() {
    it('starts at a default temperature of 20 degrees', function() {
      expect(mrThermo.temp).toEqual(20);
    });

    it('has a minimum temperature of 10', function() {
      mrThermo.temp = 10
      mrThermo.down()
      expect(mrThermo.temp).toEqual(10);
    });
  });

  describe('changing temperature', function() {
    it('temperature can be raised', function() {
      mrThermo.up()
      expect(mrThermo.temp).toEqual(21);
    });

    it('temperature can be lowered', function() {
      mrThermo.down()
      expect(mrThermo.temp).toEqual(19);
    });

    it('temperature can be reset', function() {
      mrThermo.up()
      mrThermo.reset()
      expect(mrThermo.temp).toEqual(20);
    });
  });

  describe('power saving green mode', function() {
    it('Power Saver is on by default', function() {
      expect(mrThermo.psm).toEqual(true);
    });

    it('has a maximum temp of 25 degrees with Power Saver on', function() {
      mrThermo.temp = 25
      mrThermo.up()
      expect(mrThermo.temp).toEqual(25);
    });
    it('has a maximum temp of 32 degrees with Power Saver off', function() {
      mrThermo.psmSwitch()
      mrThermo.temp = 32
      mrThermo.up()
      expect(mrThermo.temp).toEqual(32);
    });
  });

  describe('power usage', function() {
    it('has a low usage', function() {
      mrThermo.temp = 17
      expect(mrThermo.usageLevel()).toEqual('low-usage')
    });
    it('has a medium usage', function() {
      mrThermo.temp = 24
      expect(mrThermo.usageLevel()).toEqual('medium-usage')
    });
    it('has a high usage', function() {
      mrThermo.temp = 25
      expect(mrThermo.usageLevel()).toEqual('high-usage')
    });
  });
});
